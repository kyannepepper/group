
const firebase = require('firebase');

module.exports = {
    getGroups: async (req, res) => {
        const db = firebase.firestore();
        groups = await db.collection('group_requests').where('user_id', '==', req.session.user.id).get();
        let allGroups = [];
        groups.forEach(doc => allGroups.push({...doc.data(), id:doc.id}));
        console.log(allGroups);
        if (allGroups[0]){
            console.log(allGroups);
            return res.status(200).send(allGroups)
        }
    },
    createGroup: async (req, res) => {
        const db = firebase.firestore();
        console.log(req.body);
        const data = await db.collection('groups').add({group_name:req.body.group_name, description:req.body.description, money:0});
        console.log(req.session.user)
        const newUser = await db.collection('group_requests').add({accepted: true, is_admin:true, group_id:data.id, group_name:req.body.group_name, description:req.body.description, user_id:req.session.user.id});
        console.log(newUser.id)
        res.sendStatus(200);
    },
    deleteGroup: async (req, res) => {
        const {id} = req.params;
        const db = firebase.firestore();
        const data = await db.collection('groups').doc(`${id}`).delete();
        db.collection('messages').where('group_id', '==', id).delete();
        db.collection('group_requests').where('group_id', '==', id).delete();
        res.sendStatus(200);
    },
    updateMoney: async (req, res) => {
        const {money} = req.body;
        const db = firebase.firestore();
        const data = await db.collection('groups').doc(`${req.body.id}`).update({money});
        res.status(200).send(money);
    },
    createRequest: async (req, res) => {
        const db = firebase.firestore();
        const data = await db.collection('group_requests').add({...req.body, accepted: false});
        res.status(200).send(data);
    },
    deleteRequest: async (req, res) => {
        const {id} = req.params;
        const db = firebase.firestore();
        const data = await db.collection('group_requests').doc(`${id}`).delete();
        res.sendStatus(200);
    },
    acceptRequest: async (req, res) => {
        const db = firebase.firestore();
        const data = await db.collection('group_requests').doc(`${req.body.id}`).update({accepted: true});
        res.sendStatus(200);
    }
};
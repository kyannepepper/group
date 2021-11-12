const firebase = require('firebase');

module.exports = {
    createGroup: async (req, res) => {
        const db = firebase.firestore();
        const data = await db.collection('groups').add({name:req.body.name, money:0});
        res.status(200).send(data);
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
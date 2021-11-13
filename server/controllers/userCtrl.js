const bcrypt = require('bcryptjs')


const firebase = require('firebase');
const template_user = {
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    email: '',
    money: 0
}

const groups =  {
    name: '',
    money: 0
}

const group_requests = {
    is_admin: true,
    user_id: 0,
    group_id: 0,
    accepted: false
}

module.exports = {
    signUp: async (req, res) => {
        console.log("Inside of signUp", req.body)
        const db = firebase.firestore();
        usernameInUse = await db.collection('users').where('username', '==', req.body.username).get();
        let users = [];
        usernameInUse.forEach(doc => users.push({...doc.data(), id:doc.id}));
        console.log(users[0])
        if (users[0]) {
            console.log("ERROR");
            return res.status(400).send(users[0].username + ' already taken');
        } else {
            const hash = bcrypt.hashSync(req.body.password, 10);
            const user = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                username: req.body.username,
                password: hash,
                email: req.body.email,
                money: 0
            }
            console.log("This shouldn't work");
            await db.collection('users').add(user);
            delete user.password;
            req.session.user = user;
            res.sendStatus(200);
            // res.status(200).send(data);
        }
    },
    login: async (req, res) => {
        const db = firebase.firestore();
        console.log(req.body)
        const {username, password} = req.body;
        const user = await db.collection('users').where('username', '==', username).get();
        users = [];
        user.forEach(doc => users.push({...doc.data(), id:doc.id}));

        if (!users[0]) return res.status(401).send('Username or Password is incorrect');
        const authorization = bcrypt.compareSync(password, users[0].password);
        if (!authorization) return res.status(401).send('Username or Password is incorrect');
        delete users[0].hash
        users[0].id = users[0].id;
        req.session.user = users[0];
        return res.status(200).send(req.session.user);
    },
    signOut: async (req, res) => {
        req.session.destroy();
        return res.sendStatus(200);
    },
    quickLogin: async (req, res) => {
        console.log("WORKING");
        if (req.session.user) {
            const db = firebase.firestore();
            const {username} = req.session.user;
            console.log("SESSION LOGIN READ")
            const user = await db.collection('users').where('username', '==', username).get();
            users = [];
            user.forEach(doc => users.push(doc.id));
            if (!users[0]) return res.status(401).send('Invalid User');

            return res.status(200).send(req.session.user);
        } else {
            return res.sendStatus(200);
        }
    }
};
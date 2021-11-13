const firebase = require('firebase');

module.exports = {
    createOption: async (req, res) => {
        console.log("Inside of createOption", req.body)
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
    }
};
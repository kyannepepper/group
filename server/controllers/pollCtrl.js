const firebase = require('firebase');

module.exports = {
    createPoll: async (req, res) => {
        console.log("Inside of createPoll", req.body)
        const db = firebase.firestore();
        let pollsInProgress = 0;
        if (pollInProgress > 1) {
            console.log("ERROR");
            return res.status(400).send(users[0].username + ' already taken');
        } else {
            groups = await db.collection('group_requests').where('group_id', '==', req.body.group_id).get();
            const poll = {
                question: req.body.question,
                group_id: req.body.group_id,
                votes_limit: req.body.votes_limit,
                is_ended: false
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
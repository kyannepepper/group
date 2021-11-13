const firebase = require('firebase');

module.exports = {
    createPoll: async (req, res) => {
        // console.log("Inside of createPoll", req.body)
        const db = firebase.firestore();
        let pollsInProgress = 0;
        if (pollsInProgress > 1) {
            console.log("ERROR");
            return res.status(400).send('Too Many Polls Going');
        } else {
            console.log("HERER", req.body.group_id)
            // amountOfUsers = await db.collection('group_requests').where('group_id', '==', req.body.group_id).get();
            amountOfUser = 20;
            //for testing
            const poll = {
                question: req.body.question,
                group_id: req.body.group_id,
                votes_limit: amountOfUsers,
                is_ended: false
            }
            console.log("This shouldn't work");
            await db.collection('polls').add(poll);
            res.sendStatus(200);
            // res.status(200).send(data);
        }
    }
};
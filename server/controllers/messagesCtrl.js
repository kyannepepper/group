const firebase = require('firebase');

module.exports = {
    sendMessage: async (req, res) => {
        db = firebase.firestore();

        const data = await db.colletion('messages').add(req.body);

        res.status(200).send(data);
    },
};
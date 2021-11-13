require('dotenv').config();
const express = require('express'),
    session = require('express-session'),
    cors = require('cors'),
    http = require('http'),
    app = express(),
    path = require('path'),
    server = http.createServer(app),
    firebase = require('firebase'),
    userCtrl = require('./controllers/userCtrl'),
    messagesCtrl = require('./controllers/messagesCtrl'),
    groupCtrl = require('./controllers/groupCtrl'),
    pollCtrl = require('./controllers/pollCtrl'),
    optionCtrl = require('./controllers/optionCtrl'),
    {SERVER_PORT, SESSION_SECRET} = process.env

app.use(express.urlencoded({ extended: true }));

var firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBacket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};

firebase.initializeApp(firebaseConfig);

app.use(cors())

app.use(session({
    resave: false,
    saveUninitialized:true,
    secret: SESSION_SECRET
}))
app.post('/auth/login', userCtrl.login);
app.get('/auth/quickLogin', userCtrl.quickLogin);
app.get('/auth/logout', userCtrl.signOut);
app.post('/auth/signUp', userCtrl.signUp);

app.post('/api/messages', messagesCtrl.sendMessage);

app.post('/api/groups', groupCtrl.createGroup);
app.put('/api/groups', groupCtrl.updateMoney);
app.delete('/api/groups/:id', groupCtrl.deleteGroup);
app.post('/api/request', groupCtrl.createRequest);
app.put('/api/request', groupCtrl.acceptRequest);
app.delete('/api/request/:id', groupCtrl.deleteGroup);

app.post('/api/polls', pollCtrl.createPoll);
app.post('api/options', optionCtrl.createOption);

// app.use(express.static(__dirname + '/../build'));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build/index.html'))
// })


server.listen(SERVER_PORT, () => console.log(`Server has started on port ${SERVER_PORT}`));
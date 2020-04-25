const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db.js');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/dist')));
app.use('/resources', express.static(__dirname + '/resources'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.post('/register', (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    }
    db.register(user, d => {
        db.login(user, f => {
            res.cookie('session', f._id);
            res.end();
        });
    });
    
})

app.post('/login',  (req, res) => {
    console.log(req.body);
    const user = {
        username: req.body.username,
        password: req.body.password,
    }
    db.login(user, d => {
        res.cookie('session', d._id);
        res.end();
    });
});

app.listen(8090, () => {
    console.log('Running on port: 8090');
    console.log(__dirname);
});
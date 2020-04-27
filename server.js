const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const path = require('path');
const db = require('./db.js');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser())
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use('/resources', express.static(__dirname + '/resources'));

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'resources')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname.split('.')[0] + '-' + Date.now() + '.' + file.originalname.split('.')[1]);
    }
  })
   
var upload = multer({ storage: storage })

app.get('/', (req, res) => {
    res.sendFile('index.html');
});
let router = express.Router();
//User routes
router.post('/register', (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    }
    db.registerUser(user, d => {
        if(d == null){
            res.status(501).end();
            return;
        }
        db.loginUser(user, f => {
            res.cookie('session', f._id);
            res.cookie('user', f.username);
            res.end();
        });
    });
    
})

router.post('/login',  (req, res) => {
    console.log(req.body);
    const user = {
        username: req.body.username,
        password: req.body.password,
    }
    db.loginUser(user, d => {
        if(d == null) {
            res.status(501).end();
            return;
        }
        res.cookie('session', d._id);
        res.cookie('user', d.username);
        res.end();
    });
});

router.post('/updateUser', (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    }
    console.log(user);
    db.updateUser(user, d => {
        //console.log(d);
        res.status(200).end();
    });
});

router.get('/getUser', (req, res) => {
    db.getUser(req.cookies.user, d => {
        res.json({username: d.username, email: d.email});
        res.end();
        return;
    });
});

router.delete('/deleteUser', (req, res) => {
    console.log(req.query);
    db.deleteUser(req.query.username, d => {
        //console.log(d);
        res.clearCookie('session', { path: '/' });
        res.clearCookie('user', { path: '/' });
        res.end();
    });
});
//Item routes
router.get('/getItems', (req, res) => {
    db.listItems(d => {
        res.json(d).end();
    });
});

router.post('/addItem', upload.single('imageName'), (req, res, next) => {
    const file = req.file;
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    db.addItem({
        artist: req.body.artist,
        title: req.body.title,
        year: req.body.year,
        description: req.body.description,
        imageUrl: file.path,
        owner: req.cookies.user
    }, d => {
        //console.log(d);
    });
    res.redirect('/#/items');
    res.end();
});

router.delete('/deleteItem/:id', (req, res) => {
    console.log(req.params);
    db.deleteItem(req.params.id, d => {
        //console.log(d);
    })
    res.status(200).end();
});
router.get('/getItem', (req, res) => {

    db.getItem(req.query.id, d => {
        res.json(d).end();
    });
});

router.post('/updateItem', (req, res) => {
    db.updateItem({
        id: req.body.id,
        artist: req.body.artist,
        title: req.body.title,
        year: req.body.year,
        description: req.body.description
    }, d => {
    })
    res.status(200).end();
});

app.use('/api', router);

app.listen(8090, () => {
    console.log('Running on port: 8090');
    console.log(__dirname);
});
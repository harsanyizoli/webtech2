const MongoClient = require('mongodb').MongoClient;
const mongo = require('mongodb');
const url = 'mongodb://localhost:27017';
const config = {
    useNewUrlParser: true
}
const databaseName = 'vueapp';
const usersCollection = 'users';
const itemsCollection = 'items';

var register = (user, fn) => {
    let client = new MongoClient(url, config);
    client.connect(err => {
        if (err) console.error(err);
        const collection = client.db(databaseName).collection(usersCollection);
        collection.find({username: user.username}).toArray(function(err, docs) {
            if(docs.length == 0){
                collection.insertOne(user, (err, d) => {
                    if (err) console.error(err);
                    fn(d);
                })
            } else {
                fn(null);
            }
            client.close();
          });
    });
}

var login = (user, fn) => {
    let client = new MongoClient(url, config);
    client.connect((err) => {
        if (err) console.error(err);
        const collection = client.db(databaseName).collection(usersCollection);
        collection.find().toArray(function (err, docs) {
            let b = null;
            for (const usr of docs) {
                if (usr.password === user.password && usr.username === user.username) {
                    b = usr;
                }
            }
            fn(b);
            client.close();
        });
    });
}

var getUser = (username, fn) => {
    let client = new MongoClient(url, config);
    client.connect((err) => {
        if (err) console.error(err);
        const collection = client.db(databaseName).collection(usersCollection);
        collection.find().toArray(function (err, docs) {
            let b = null;
            for (const usr of docs) {
                if(usr.username == username && b == null) {
                    b = usr;
                    
                }
            }
            fn(b);
            client.close();
        });
    });
}

let updateUser = (user, fn) => {
    let client = new MongoClient(url, config);
    client.connect((err) => {
        if (err) console.error(err);
        const collection = client.db(databaseName).collection(usersCollection);
        collection.updateOne({ username: user.username }, { $set: { username: user.username, password: user.password, email: user.email } }, function (err, res) {
            fn(res);
            client.close();
        });
    });
}
let deleteUser = (username, fn) => {
    let client = new MongoClient(url, config);
    client.connect((err) => {
        if (err) console.error(err);
        const collection = client.db(databaseName).collection(usersCollection);
        collection.deleteOne({ username: username }, function (err, res) {
            fn(res);
            client.close();
        });
    });
}
//Items
let addItem = (item, fn) => {
    let client = new MongoClient(url, config);
    client.connect(err => {
        if (err) console.error(err);
        const collection = client.db(databaseName).collection(itemsCollection);
        collection.insertOne(item, (err, d) => {
            if (err) console.error(err);
            fn(d);
        })
        client.close();
    });
}

let listItems = fn => {
    let client = new MongoClient(url, config);
    client.connect(err => {
        if (err) console.error(err);
        const collection = client.db(databaseName).collection(itemsCollection);
        collection.find().toArray((err, d) => {
            if (err) console.error(err);
            fn(d);
            client.close();
        });
    });
}
let updateItem = (item, fn) => {
    let client = new MongoClient(url, config);
    client.connect((err) => {
        if (err) console.error(err);
        const collection = client.db(databaseName).collection(itemsCollection);
        collection.updateOne({ _id: mongo.ObjectID(item.id) }, { $set: { artist: item.artist, title: item.title, year: item.year, description: item.description } }).then(res => {
            fn(res);
            client.close();
        });
    });
}
let getItem = (id, fn) => {
    let client = new MongoClient(url, config);
    client.connect((err) => {
        if (err) console.error(err);
        console.log(id);
        const collection = client.db(databaseName).collection(itemsCollection);
        collection.findOne(mongo.ObjectID(id)).then(res => {
            fn(res);
        })
    });
}
let deleteItem = (id, fn) => {
    let client = new MongoClient(url, config);
    client.connect((err) => {
        if (err) console.error(err);
        const collection = client.db(databaseName).collection(itemsCollection);
        collection.deleteOne({ _id: mongo.ObjectID(id) }, function (err, res) {
            fn(res);
            client.close();
        });
    });
}

module.exports = {
    //user
    "registerUser": register,
    "loginUser": login,
    'getUser': getUser,
    'updateUser': updateUser,
    'deleteUser': deleteUser,
    //item
    'addItem': addItem,
    'getItem': getItem,
    'listItems': listItems,
    'updateItem': updateItem,
    'deleteItem': deleteItem
};
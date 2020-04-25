const MongoClient = require('mongodb').MongoClient;
//const appRoot = require('app-root-path');
//const mongoConfig = require(`${}/config/mongo`);
const url = 'mongodb://localhost:27017';
const config = {
    useNewUrlParser: true
}
const databaseName = 'vueapp';
const usersCollection = 'users';

function reg(user, callback) {
    let client = new MongoClient(url, config);
    client.connect((err) => {
        if (err) console.error(err);
        const db = client.db(databaseName);
        const collection = db.collection(usersCollection);
        collection.insertOne(user, function (err, docs) {
            callback(docs);
        });
        client.close();
    });
}
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
/*
function mod(user, callback) {
    let client = new MongoClient(mongoConfig.database.url, mongoConfig.config);
    client.connect((err) => {
        const db = client.db(mongoConfig.database.databaseName);
        const collection = db.collection(mongoConfig.database.userCßollection);
        collection.updateOne({ email: user.email }, { $set: { name: user.name, password: user.password, email: user.email } }, function (err, docs) {
            callback(docs);
        });
        client.close();
    });
}
*/
module.exports = {
    "register": register,
    "login": login
};
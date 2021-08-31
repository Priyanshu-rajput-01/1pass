const { MongoServerError } = require('mongodb');
const db_path = 'mongodb+srv://brain:Rajput2001@cluster0.zlcuv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const mongoose = require('mongoose');
mongoose.connect(db_path);
const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connectiong to mongodb"));
db.once('open',function(){
    console.log('Connected to mongodb');
})

module.exports = db;
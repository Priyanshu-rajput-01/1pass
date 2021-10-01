const { MongoServerError } = require('mongodb');
const db_path = 'mongodb+srv://brain:1234567890@cluster0.ptgjo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const mongoose = require('mongoose');
mongoose.connect(db_path);
const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connectiong to mongodb"));
db.once('open',function(){
    console.log('Connected to mongodb');
})

module.exports = db;
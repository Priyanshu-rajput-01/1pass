const { MongoServerError } = require('mongodb');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/password_generator');
const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connectiong to mongodb"));
db.once('open',function(){
    console.log('Connected to mongodb');
})

module.exports = db;
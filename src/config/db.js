const mongoose = require('mongoose');
const { dbConfig } = require('./config.js');

mongoose.connect(dbConfig.uri,dbConfig.options)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const db = mongoose.connection;

module.exports = db;
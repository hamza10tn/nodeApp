const mongoose = require('mongoose');

// Define Schema
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    age: String,
});

// Create Model
const Users = mongoose.model('users', userSchema);

module.exports = Users;
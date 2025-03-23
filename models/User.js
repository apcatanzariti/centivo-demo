const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        reuqired: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);
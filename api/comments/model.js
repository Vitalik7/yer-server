const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    index: {type: Number},
    description: { type: String},
    checked: { type: Boolean }
});

module.exports = mongoose.model('Present', userSchema)

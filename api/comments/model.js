const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    // author: {name: {type: String},
    //          avatar: {type: String}},
    index: {type: Number},
    description: { type: String},
    checked: { type: Boolean }
    // typeComment: {type: Boolean},
    // likes: {type: Number, default: 0},
    // date: {type: Date, default: Date.now},
    // images: [{type: String}],
    // lat: { type: Number},
    // lng: { type: Number}
});

module.exports = mongoose.model('Comment', userSchema)

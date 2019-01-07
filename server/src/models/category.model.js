const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    name: String,
    _posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Blog'
    }]
})

const Category = mongoose.model('Category', CategorySchema)
module.exports = Category
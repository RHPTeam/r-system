const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    name: String,
    _blogs: [{
        type: Schema.Types.ObjectId,
        ref: 'Blog'
    }],
})

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;

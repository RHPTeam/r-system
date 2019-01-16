const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogSchema = new Schema({
    title: String,
    desc: String,
    body: String,
    clap: Number,
    createAt: Date,
    editAt: Date,
    status: String,
    image: String,
    slug: String,
    _author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    _category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    _comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})

const Blog = mongoose.model('Blog', BlogSchema)
module.exports = Blog
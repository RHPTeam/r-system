const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TrashSchema = new Schema({
    type: String,
    // _posts: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Blog'
    // }],
    _library: [{
        type: Schema.Types.ObjectId,
        ref: 'Library'
    }]
})

const Trash = mongoose.model('Trash', TrashSchema)
module.exports = Trash
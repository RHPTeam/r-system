const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NotificationSchema = new Schema({
    _from: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    _to: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    content: String,
    createAt: Date,
    status: Boolean
})

const Notification = mongoose.model('Notification', NotificationSchema)
module.exports = Notification
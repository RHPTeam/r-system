const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PermissionSchema = new Schema({
    name: String,
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Permission = mongoose.model('Permission', PermissionSchema)
module.exports = Permission
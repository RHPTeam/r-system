const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobSchema = new Schema({
    position: String,
    nameCompany: String,
    locationCompany: String,
    slary: Number,
    type: String,
    level: String,
    role: String,
    office: String,
    sizeCompany: String,
    typeCompany: String,
    technologies: [{
        name: String
    }],
    content: String,
    infoCompany: String,
    _createPerson: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    _partners: [{
        type: Schema.Types.ObjectId,
        type: 'User'
    }],
    website: String,
    createAt: Date
})

const Job = mongoose.model('Job', JobSchema)
module.exports = Job
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    url: String,
    image: String,
    type: String
})

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product
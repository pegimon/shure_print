const mongoose = require('mongoose')
const Schema = mongoose.Schema

const product = new Schema({
    name:String,
    price:{type:Number, default:0},
    min:{type:Number, default:1},
    description:String,
    color : Array,
    logo : String,
    pictures:Array,
    category_id:String
})

const Product = mongoose.model('Product', product)
module.exports = Product
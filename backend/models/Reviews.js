const mongoose = require("mongoose")
const Schema = mongoose.Schema

const reviews = new Schema ({
    product_id : String,
    review : String,
    name : String,
    stars : Number
}, {timeseries: true})

const Reviews = mongoose.model("Reviews", reviews)
module.exports = Reviews
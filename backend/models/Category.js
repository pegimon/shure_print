const mongoose = require("mongoose")
const Schema = mongoose.Schema

const category = new Schema ({
    name : String
})

const Category = mongoose.model("Category",category)
module.exports = Category
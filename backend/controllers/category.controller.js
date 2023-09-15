const Category = require('../models/Category')
const Product = require('../models/Product')
const mongoose = require('mongoose')


module.exports.get_all_categories = async (req, res) => {
    await Category.find().then(e => {
        return res.json(e)
    }).catch(err => {
        console.log(err.message)
    })
}

module.exports.get_category_by_id = async (req, res) => {
    var { _id } = req.params
    _id = new mongoose.Types.ObjectId(_id)
    await Category.findById(_id).then(e => {
        return res.status(200).json(e)
    }).catch(err => {
        console.log(err.message)
        return res.status(404).json({ error: err.message })
    })
}

module.exports.add_category = async (req, res) => {
    const body = req.body
    const category = new Category(body)
    await category.save().then(e => {
        return res.status(200).json(e)
    }).catch(err => {
        console.log(err.message)
        return res.status(401).json({error:err.message})
    })
}

module.exports.update_category = async (req, res) => {
    const body = req.body
    var _id = req.params
    _id = new mongoose.Types.ObjectId(_id)
    const isThere = await Category.findById(_id)
    if(!isThere){
        return res.status(404).json("can't update Category not found.")
    }
    await Category.findByIdAndUpdate(_id, body, {new : true}).then(e => {
        return res.status(200).json(e)
    })
}

module.exports.delete_category = async (req, res) => {
    var {_id} = req.params
    _id = new mongoose.Types.ObjectId(_id)
    const isthere = await Category.findById(_id)
    if(!isthere){
        return res.status(404).json("category already not in the database")
    }
    await Product.deleteMany(_id).then(e => {
        return res.status(200).json("Products deleted")
    }).catch(err => {
        console.log(err)
        res.status(401).json({error:err.message})
    })
    await Category.findByIdAndDelete(_id).then(e => {
        return res.status(200).json("Category deleted")
    }).catch(err => {
        console.log(err)
        res.status(401).json({error:err.message})
    })
}
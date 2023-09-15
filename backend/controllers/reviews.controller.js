const Review = require('../models/Reviews')
const mongoose = require('mongoose')

module.exports.get_all_reviews = async (req, res) => {
    await Review.find().then(e => {
        return res.json(e)
    }).catch(err => {
        console.log(err.message)
    })
}

module.exports.get_reviews_by_id = async (req, res) => {
    var { _id } = req.params
    _id = new mongoose.Types.ObjectId(_id)
    await Review.findById(_id).then(e => {
        return res.status(200).json(e)
    }).catch(err => {
        console.log(err.message)
        return res.status(404).json({ error: err.message })
    })
}

module.exports.add_reviews = async (req, res) => {
    const body = req.body
    const review = new Review(body)
    await Review.save().then(e => {
        return res.status(200).json(e)
    }).catch(err => {
        console.log(err.message)
        return res.status(401).json({error:err.message})
    })
}

module.exports.update_reviews = async (req, res) => {
    const body = req.body
    var {_id} = req.params
    _id = new mongoose.Types.ObjectId(_id)
    const isThere = await Review.findById(_id)
    if(!isThere){
        return res.status(404).json("can't update Review not found.")
    }
    await Review.findByIdAndUpdate(_id, body,{new:true}).then(e => {
        return res.status(200).json(e)
    }).catch(err => {
        console.log(err.message)
        return res.status(401).json(e)
    })
}

module.exports.delete_reviews = async (req, res) => {
    var {_id} = req.params
    _id = new mongoose.Types.ObjectId(_id)
    const isthere = await Review.findById(_id)
    if(!isthere){
        return res.status(404).json("Review already not in the database")
    }
    await Review.findByIdAndDelete(_id).then(e => {
        return res.status(200).json("Review deleted")
    }).catch(err => {
        console.log(err)
        res.status(401).json({error:err.message})
    })
}
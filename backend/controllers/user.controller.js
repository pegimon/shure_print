const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config')
const User = require('../models/User')
const mongoose = require('mongoose')

module.exports.signUp = async (req, res, next) => {
    let {name, email, password} = req.body;
    password = bcrypt.hashSync(password + config.password, parseInt(config.salt))
    const e = await User.find({email})
    if(e.length !== 0){
        return res.json("user found please login");
    }
    const user = new User({name, email, password})
    await user.save().then(e => {
        e.password = undefined
        return res.status(200).json(e)
    }).catch(err => {
        console.log(err.message)
        return res.status(401).json({error:err.message})
    })
}

module.exports.get_users = async (req, res) => {
    await User.find().then(e => {
        return res.status(200).json(e)
    }).catch(err => {
        console.log(err.message)
        return res.status(404).json({error:err.message})
    })
}

module.exports.login = async (req, res, next) => {
    let {email, password} = req.body;
    await User.find({email}).then(e => {
        if(Object.keys(e).length === 0){
            return res.json("email not found please signup")
        }else {
            const iseq = bcrypt.compareSync(`${password}${config.password}`, e[0].password)
            if(!iseq){
                return res.json("passowrd incorrect")
            }else {
                e[0].password = undefined
                return res.status(200).json(e[0])
            }
        }
    })
}

module.exports.delete_user = async (req, res) => {
    let {_id} = req.params
    _id = new mongoose.Types.ObjectId(_id)
    await User.findByIdAndDelete({_id}).then(e => {
        if(e)
            return res.status(200).json(e)
        else
            return res.status(404).json("fokak")
    }).catch(err => {
        console.log(err.message)
        return res.status(403).json({error:err.message})
    })
}

module.exports.delete_users_by_email = async (req, res) => {
    let {email} = req.body
    await User.deleteMany({email:email}).then(e => {
        if(e)
            return res.status(200).json(e)
        else
            return res.status(404).json("fokak")
    }).catch(err => {
        console.log(err.message)
        return res.status(403).json({error:err.message})
    })
}
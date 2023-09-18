const jwt = require("jsonwebtoken")
const config = require('../config')

module.exports = async (req, res, next) => {
    const auth = req.get("Authorization")
    if(!auth){
        return res.status(401).json("no token found")
    }
    const token = auth.split(' ')[1]
    jwt.verify(token, config.password, (err, decoded) => {
        if(err) {
            res.status(401).json("token unvalid")
        }else {
            req.user = decoded
            next()
        }
    })
}
require('dotenv').config()
const config = process.env

module.exports = {
    mongo_url : config.MONGO_URL,
    port : config.PORT
}
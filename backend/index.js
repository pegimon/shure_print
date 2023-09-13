const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const config = require('./config')
const router = require('./routers/index')
mongoose.connect(config.mongo_url).then(() => console.log("database connected")).catch(err => console.log(err))
app.use(express.json())
app.use(router)
app.get('/', (req, res) => {
    res.send("hello server")
})

app.listen(config.port, () => {
    console.log("server is started at port " + port)
})
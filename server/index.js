const express = require('express')

const app = express()

app.use(express.json())

const connect = require('./src/config/db')

const dictionaryController = require('./src/controller/Dictionary.controller')

app.use("/dictionary", dictionaryController)

app.listen(5000, async ()=>{
    await connect()
    console.log("server running on port 5000")
})

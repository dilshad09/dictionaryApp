const express = require('express')

const app = express()

app.use(express.json())

const connect = require('./src/config/db')

const dictionaryController = require('./src/controller/Dictionary.controller')

app.use("/dictionary", dictionaryController)

app.listen(process.env.PORT, ()=>{
     connect()
    console.log("server running on port 5000")
})

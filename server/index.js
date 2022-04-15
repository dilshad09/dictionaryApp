const express = require('express')

const path = require('path')
const app = express()

const connect = require('./src/config/db')

const Dictionary = require('./src/models/Dictionary.model')

app.use(express.json())
app.use("/", express.static((__dirname, '../')))
app.post("/dictionary", async(req,res)=>{
    try {
        const dictionary = await Dictionary.create(req.body)
        res.status(201).send(dictionary)
    } catch (error) {
        console.log(error)
    }
})

app.get("/dictionary", async(req,res)=>{
    try {
        const dictionary = await Dictionary.find()
        res.status(200).send(dictionary)
    } catch (error) {
        console.log(error)
    }
})
app.listen(5000, async()=>{
    await connect()
    console.log("server running on port 5000")
})
// "05031994@As"
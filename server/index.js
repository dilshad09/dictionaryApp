const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect("mongodb+srv://dilshad09:05031994@dictionary.jxpqt.mongodb.net/dictionaryDB")

const Dictionary = require('./src/models/Dictionary.model')

app.use(express.json())

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
app.listen(5000, ()=>{
    console.log("server running on port 5000")
})
// "05031994@As"
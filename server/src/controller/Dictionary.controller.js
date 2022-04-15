const express = require('express')
const router = express.Router()

const Dictionary = require('../models/Dictionary.model')


router.post("/", async(req,res)=>{
    console.log(req.body)
    try {
        
        const dictionary = await Dictionary.create(req.body)
        res.status(201).send(dictionary)
    } catch (error) {
        console.log(error)
    }
})

router.get("/", async(req,res)=>{
    try {
        const dictionary = await Dictionary.find()
        res.status(200).send(dictionary)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
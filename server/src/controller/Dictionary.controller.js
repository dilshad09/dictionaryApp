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
        const dictionary = await Dictionary.find().lean().exec()
        res.status(200).send(dictionary)
    } catch (error) {
        console.log(error)
    }
})

router.get("/find/:word", async(req,res)=>{
    console.log()
    try {
        const dictionary = await Dictionary.find({word:req.params.word}).lean().exec()
        res.status(200).send(dictionary)
    } catch (error) {
        console.log(error)
    }
})
module.exports = router;

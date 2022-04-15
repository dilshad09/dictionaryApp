const express = require('express')
const router = express.Router()

const Dictionary = require('./src/models/Dictionary.model')


router.use("/", express.static((__dirname, '../')))
router.post("/dictionary", async(req,res)=>{
    try {
        const dictionary = await Dictionary.create(req.body)
        res.status(201).send(dictionary)
    } catch (error) {
        console.log(error)
    }
})

router.get("/dictionary", async(req,res)=>{
    try {
        const dictionary = await Dictionary.find()
        res.status(200).send(dictionary)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
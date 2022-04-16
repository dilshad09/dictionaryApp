const mongoose = require('mongoose')

const connect =  ()=>{
    return  mongoose.connect("mongodb+srv://dilshad000:dilshad09@cluster0.qpt2k.mongodb.net/dictionaryDatabase")
}
module.exports = connect;
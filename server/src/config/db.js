const mongoose = require('mongoose')

const connect = async ()=>{
    return await mongoose.connect("mongodb+srv://dilshad09:05031994@dictionary.jxpqt.mongodb.net/dictionaryDB")
}
module.exports = connect;
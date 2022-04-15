const mongoose = require('mongoose')
require('dotenv').config()
const connect =  ()=>{
    return  mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}
module.exports = connect;
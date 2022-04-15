const mongoose =require('mongoose');

const dictionarySchema = new mongoose.Schema({
    word:{type:String, required:true},
    
},
{timestamps:true,
versionKey:false
}
)

const Dictionary = mongoose.model("Dictionary", dictionarySchema);
module.exports = Dictionary;
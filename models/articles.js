const  mongoose= require('mongoose');

const articlesSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    }
})

 module.exports= mongoose.model('articles', articlesSchema)
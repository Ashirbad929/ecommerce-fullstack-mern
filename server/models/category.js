const mongoose=require('mongoose')


const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        minlength:[2,"Too short"],
        maxlength:[32,"Too long"]


    },
    slug:{
        type:String,
        unique:true,
        lowercase:true,
        index:true

    }

},{timestamps:true})

module.exports=mongoose.model('Category',categorySchema)
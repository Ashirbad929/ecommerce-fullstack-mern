const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema
const cartSchema=new mongoose.Schema({

    products:[
        {
            product:{
                type:ObjectId,
                ref:"product"
            },
            count:Number,
            color:String,
            price:Number
        }
    ],
    cartTotal:Number,
    totalAfterDiscount:Number,
    orderdBY:{type:ObjectId,ref:"User"},

},{timestamps:true})
module.exports=mongoose.model("Cart",cartSchema)
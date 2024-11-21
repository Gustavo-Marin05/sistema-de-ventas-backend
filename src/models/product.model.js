import { request } from "express";
import mongoose from "mongoose";

const productSchema =new mongoose.Schema({

    nameProduct:{
        type:String,
        required:true,
        trim:true,
    },
    amount:{
        type:Number,
        required:true,
        trim:true,
        min:[0,'la cantidad no puede ser negativa']
    },
    price:{
        type:Number,
        trim:true,
        min:[0,'el precio no puede ser negativo'],
        required:true

    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true
    }
    


},{timestamps:true})

export default mongoose.model('Product',productSchema);
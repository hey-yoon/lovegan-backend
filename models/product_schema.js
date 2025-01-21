import mongoose, { model, Schema } from "mongoose";

const productSchema = new Schema({
    title: {type : String, required : true},
    description : {type : String, required : true},
    price: {type : Number, required : true},
    star : {type : String, required : true},
    review : {type : Number, required : true},
    discount : {type: Number, required : true},
    tag : {type : String, required : true},
    categories : {type : String, required : true},
    image : {type : String}
})

export default model("Product", productSchema, "product");
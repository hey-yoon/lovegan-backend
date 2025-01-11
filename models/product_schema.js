import mongoose, { model, Schema } from "mongoose";

const productSchema = new Schema({
    title: {type : String, required : true},
    description : {type : String, required : true},
    price: {type : Number, required : true},
})

export default model("Product", productSchema, "product");
import mongoose, { Schema, model } from "mongoose";

const faqSchema = new Schema({
    no : { type : Number, required : true, unique : true, default: 0},
    title : { type : String, required: true },
    contents : { type : String, required: true}
})

export default model("Faq", faqSchema, "faq");
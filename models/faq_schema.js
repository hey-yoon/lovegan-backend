import mongoose, { Schema, model } from "mongoose";

const faqSchema = new Schema({
    no : { type : Number, require : true, unique : true, default: 0},
    title : { type : String, require: true },
    contents : { type : String, require: true}
})

export default model("Faq", faqSchema, "faq");
import mongoose, { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils.js";

const noticeSchema = new Schema({
    no : { type : Number, require : true, unique : true, default: 0},
    title : { type : String, require: true },
    writer : {type : String, require : true},
    date : { type: String, default: getCurrentTime},
    contents : { type : String, require: true}
})

export default model("Notice", noticeSchema, "notice");
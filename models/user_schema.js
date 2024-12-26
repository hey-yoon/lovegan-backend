import mongoose, { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils.js";

const userSchema = new Schema({
    email : { type : String, require : true, unique : true},
    emailAdress : { type : String, require : true},
    password : { type : String },
    name : {type : String, require : true},
    age : { type : Number, default : 0},
    phone : { type : String, default : "00000000000"},
    picture : {type : String, default : "/uploads/profiles/none_picture.jpg"},
    address : String,
    token : String, // refresh 토큰
    createAt : { type : String, default : getCurrentTime},
    updateAt : { type : String, default : getCurrentTime},
    snsId : {type : mongoose.Schema.ObjectId, ref : 'Sns'}
})

export default model("User", userSchema, "users");
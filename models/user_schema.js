import mongoose, { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils.js";

const userSchema = new Schema({
    email : { type : String, require : true, unique : true},
    emailAdress : { type : String, require : true},
    password : { type : String },
    nickname : {type : String, require : true},
    age : { type : Number, default : 0},
    phone : { type : String, default : "00000000000"},
    pictureName : {type : String, default : "none_picture.jpg"},
    picturePath : {type : String, default : "/uploads/profiles"},
    token : String, // refresh 토큰
    createAt : { type : String, default : getCurrentTime},
    updateAt : { type : String, default : getCurrentTime},
    snsId : {type : mongoose.Schema.ObjectId, ref : 'Sns'}
})

export default model("User", userSchema, "users");
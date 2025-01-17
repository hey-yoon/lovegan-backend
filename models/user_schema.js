import mongoose, { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils.js";

const userSchema = new Schema({
    email : { type : String, required : true},
    emailAdress : { type : String, required : true},
    password : { type : String },
    nickname : {type : String, required : true},
    intro : { type : String, default : ""},
    phone : { type : String, default : "00000000000"},
    pictureName : {type : String, default : "none_picture.jpg"},
    picturePath : {type : String, default : "/uploads/profiles"},
    token : String, // refresh 토큰
    createAt : { type : String, default : getCurrentTime},
    updateAt : { type : String, default : getCurrentTime},
    snsId : {type : mongoose.Schema.ObjectId, ref : 'Sns'},
    followerCount: { type: Number, default: 0 },
    followingCount: { type: Number, default: 0 },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
})

export default model("User", userSchema, "users");
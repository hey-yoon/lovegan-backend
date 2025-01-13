import { Schema, model } from "mongoose";
import { ObjectId } from "mongodb";
import { getCurrentTime } from "../utils/utils.js";

// 게시글 스키마
const postSchema = new Schema({
    author: { // 작성자 이름 
        type: Schema.Types.ObjectId, 
        ref : "User", // 유저 스키마와 참조
        required : true,
        unique : true
    },
    title : { type : String, required : true }, // 게시글 제목
    content : { type : String, required : true },
    createdAt : { type : Date, default : getCurrentTime }, // 작성 날짜
    likeCount : { type : Number, required : true },
    scrapCount : { type : Number, required : true },
    viewCount : { type : Number, required : true }
});

export default model("Post", postSchema, "post");
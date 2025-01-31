import { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils.js";

// 게시글 스키마
const postSchema = new Schema({
    author: { 
        // 작성자 이름 
        type: Schema.Types.ObjectId, 
        // 유저 스키마와 참조
        ref : "User", 
        required : true,
        unique : 1
    },
    title : { type : String, required : true }, // 게시글 제목
    content : [{ type : Schema.Types.ObjectId, ref: "Comment", required : true }],
    createdAt : { type : Date, default : getCurrentTime }, // 작성 날짜
    likeCount : { type : Number, required : true },
    scrapCount : { type : Number, required : true },
    viewCount : { type : Number, required : true }
});

export default model("Post", postSchema, "post");
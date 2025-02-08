import { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils.js";

// 게시글 스키마
const postSchema = new Schema({
    author: { type: Schema.Types.ObjectId, 
        // 유저 스키마와 참조
        ref : "User", required : false },
    title : { type : String, required : true, unique : 1 }, // 게시글 제목
    content : { type : String, required : true },
    createdAt : { type : Date, default : getCurrentTime }, // 작성 날짜
    likeCount : { type : Number, default : 0, required : true },
    scrapCount : { type : Number, default : 0, required : true },
    viewCount : { type : Number, default : 0, required : true }
});

export default model("Post", postSchema, "post");
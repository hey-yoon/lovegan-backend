import mongoose, { model, Schema } from "mongoose";
import { ObjectId } from "mongodb";

const commentSchema = new Schema({
    post : {
        type : Schema.Types.ObjectId,
        ref : "Post", // Post 더미데이터와 연관
        require : true,
    },
    author : {
        type : Schema.Types.ObjectId,
        ref : "User", // User 더미데이터와 연관
        require : true,
    },
    content : { type : String, require : true }, // 댓글 내용
    replies : [
        {
            type : Schema.Types.ObjectId,
            ref : "Comment", // 대댓글 영향
        }
    ],
    createAt : { type : Date, default : Date.now }, // 작성 날짜
})

export default model("Comment", commentSchema, "comment")
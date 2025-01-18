import { model, Schema } from "mongoose";
import { getCurrentTime } from "../utils/utils.js";
import { ObjectId } from "mongodb";

const commentSchema = new Schema({
    post : {
        // type : Schema.Types.ObjectId,
        type : String,
        // ref : "Post", 
        // Post 더미데이터와 연관 
        required : true,
        unique : 1
    },
    author : {
        // type : Schema.Types.ObjectId,
        type : String,
        // ref : "User", 
        // User 더미데이터와 연관
        required : true,
    },
    content : { type : String, required : true }, // 댓글 내용
    replies : 
    // [
        {
            // type: Schema.Types.ObjectId,
            type : String,
            // ref : "Comment", 
            // 대댓글 영향
            required : true
        },
    // ],
    contentCounts : { type : String, required : true },
    // 작성 날짜
    createAt : { type : Date, default : getCurrentTime }, 
    updateAt : { type : Date, default : getCurrentTime },
},
//     {
//         timestamps: true, // createdAt, updatedAt 자동 생성
//     }
)

export default model("Comment", commentSchema, "comment")
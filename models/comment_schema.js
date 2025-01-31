import { model, Schema } from "mongoose";
import { getCurrentTime } from "../utils/utils.js";

const commentSchema = new Schema({
    post : {type : Schema.Types.ObjectId, ref : "Post", required : true, // unique : 1
        },
    author : {type : Schema.Types.ObjectId,ref : "User", required : true},
    content : { type : String, required : true }, // 댓글 내용
    replies : 
    // [
        {
            // type: Schema.Types.ObjectId,
            type : String,
            // ref : "Comment", 
            // 대댓글 영향
            required : false
        },
    // ],
    // 작성 날짜
    createAt : { type : Date, default : getCurrentTime }, 
    updateAt : { type : Date, default : getCurrentTime },
})

export default model("Comment", commentSchema, "comment")
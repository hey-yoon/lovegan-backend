import { model, Schema } from "mongoose";

const postDetailSchema = new Schema({
    postId: { type: Schema.Types.ObjectId, ref: "Post", required: true, unique: true },
    content: { type: String, required: true },
    // comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    // likeCount: { type: Number, default: 0 },
    // scrapCount: { type: Number, default: 0 }
});

export default model("postDetail", postDetailSchema, "postdetail")
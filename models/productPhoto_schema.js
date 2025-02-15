import mongoose, { model, Schema } from "mongoose";

const productPhotoSchema = new Schema({
    productId: {type: mongoose.Schema.Types.ObjectId, ref: "Product"},
    url: String,
});

export default model("ProductPhoto", productPhotoSchema, "productPhoto");
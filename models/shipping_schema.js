import mongoose, { Schema, model } from "mongoose";
// import { getCurrentTime } from "../utils/utils.js";

const shippingSchema = new Schema({
    userRef: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    recipientName: { type: String, required: true }, // 받으실 분
    phoneNumber: { type: String, required: true }, // 휴대폰 번호
    zonecode: { type: String, required: true },
    addressLine1: { type: String, required: true }, // 주소
    addressLine2: { type: String }, // 상세주소
    isDefaultShipping: { type: Boolean, default: false } // 기본 배송지인지
});

export default model("Shipping", shippingSchema, "shippings");


import  mongoose, {Schema, model} from "mongoose";
import { getCurrentTime } from "../utils/utils.js";

const questSchema = new Schema({
    no: {type: Number, required: true, unique: true, default: 1 },
    title: {type: String, required: true},
    writer: {type: String, required: true},
    date: {type: String, default: getCurrentTime},
    contents: {type: String, required: true}
})

export default model("Quest", questSchema, "quest")
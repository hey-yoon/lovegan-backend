import mongoose, {Schema, model} from "mongoose";

const diarySchema = new Schema({
    time : {type : String, require : true},
    foodName : {type : String, require : true},
    kcal : {type : Number},
    tan : {type : Number},
    dan : {type : Number},
    gi : {type : Number},
    id : {type : String, require : true},
    date : {
        year : {type : Number, require : true},
        month: { type: Number, required: true }, 
        day: { type: Number, required: true } 
    }
})

export default model("Diary", diarySchema, "diary")
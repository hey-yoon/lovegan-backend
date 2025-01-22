import express from 'express';
import { registerFood, showFood, deleteFood } from '../../controller/diary/diary.js';

const diaryRouter = express.Router();

diaryRouter.post("/foodInput", registerFood);
diaryRouter.get("/foodInfo", showFood);
diaryRouter.delete("/deleteFood", deleteFood)

export default diaryRouter;
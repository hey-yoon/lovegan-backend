import express from 'express';
import { index } from '../controller/index.js';
import userRouter from './user/userRouter.js';
import authRouter from './auth/authRouter.js';
import customerRouter from './customer/customerRouter.js';
import communityRouter from './community/communityRouter.js';
import shippingRouter from './shipping/shippingRouter.js';
// import todoRouter from './todo/todoRouter.js';
import productRouter from './product/productRouter.js';
import restaurantRouter from './restaurant/restaurantRouter.js';
import otherRouter from './other/otherRouter.js';
import diaryRouter from './diary/diaryRouter.js';


const rootRouter = express.Router();

// get : url 경로를 입력해서 들어오는 요청, get 데이터도 요청 가능
rootRouter.get("/", index);
// rootRouter.post("/", index);
// rootRouter.delete("/", index);
// rootRouter.put("/", index);
rootRouter.use("/user", userRouter);
rootRouter.use("/auth", authRouter);
// rootRouter.use("/todo", todoRouter)
rootRouter.use("/customer",customerRouter);

rootRouter.use("/community", communityRouter);
rootRouter.use("/shipping", shippingRouter);

rootRouter.use("/product", productRouter);
rootRouter.use("/other", otherRouter);
rootRouter.use("/restaurant",restaurantRouter);
rootRouter.use("/diary", diaryRouter);

export default rootRouter;
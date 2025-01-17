import express from 'express';
import { deleteUser, loginUser, registerUser, updateUser, updatePicture, updatePassword, sendVerificationCode, verifyCode, updateNickname, updateIntro } from '../../controller/user/user.js';

const userRouter = express.Router();

userRouter.post("/login", loginUser)
userRouter.post("/register", registerUser);
userRouter.put("/update", updateUser);
userRouter.delete("/delete", deleteUser);
userRouter.post("/picture", updatePicture);
userRouter.post("/change-password", updatePassword);
userRouter.post("/change-nickname", updateNickname);
userRouter.post("/change-intro", updateIntro);
// 문자 인증 관련 라우트
userRouter.post("/send-verification", sendVerificationCode);
userRouter.post("/verify-code", verifyCode);

export default userRouter;
import express from "express";
import { addComment, addReply, createPost, getComment, getPost, getPostById } from "../../controller/community/community.js";

const communityRouter = express.Router();

// 게시물 생성
communityRouter.post("/createPost", createPost);
// 게시물 가져오기
communityRouter.get("/getPost", getPost);
// 
communityRouter.get("/getPostById", getPostById);
// 댓글 가져오기
communityRouter.get("/getComment", getComment);
// 댓글 추가하기
communityRouter.post("/addComment", addComment);
// 대댓글 추가하기
communityRouter.post("/addReply", addReply);

export default communityRouter;
import express from "express";
import { createPost, getPost, getPostById } from "../../controller/community/community.js";

const communityRouter = express.Router();

communityRouter.post("/createPost", createPost);
communityRouter.get("/getPost", getPost);
communityRouter.get("/getPostById", getPostById);

export default communityRouter;
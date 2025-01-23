import express from 'express';
import { getOther, postOther } from '../../controller/other/other.js';

const otherRouter = express.Router();

otherRouter.get("/get", getOther);
otherRouter.get("/post", postOther);



export default otherRouter;

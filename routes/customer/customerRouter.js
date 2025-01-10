import express from 'express';
import { deleteQuest, faq, formQuest, notice, quest, updateQuest } from '../../controller/customer/customer.js';

const customerRouter = express.Router();

customerRouter.get("/notice", notice);
customerRouter.get("/faq", faq);
customerRouter.get("/quest",quest);
customerRouter.post("/form",formQuest);
customerRouter.put("/update",updateQuest);
customerRouter.delete("/delete",deleteQuest);

export default customerRouter;
import express from 'express';
import { faq, notice } from '../../controller/customer/customer.js';

const customerRouter = express.Router();

customerRouter.get("/notice", notice);
customerRouter.get("/faq", faq);

export default customerRouter;
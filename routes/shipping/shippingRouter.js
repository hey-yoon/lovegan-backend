import express from 'express';
import { listShipping, registerShipping } from '../../controller/shipping/shipping.js';

const shippingRouter = express.Router();

shippingRouter.post("/register", registerShipping);
shippingRouter.post("/list", listShipping);

export default shippingRouter;
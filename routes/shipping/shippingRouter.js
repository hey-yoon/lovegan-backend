import express from 'express';
import { registerShipping } from '../../controller/shipping/shipping.js';

const shippingRouter = express.Router();

shippingRouter.post("/register", registerShipping);

export default shippingRouter;
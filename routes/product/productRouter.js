import express from 'express';
import { getProduct } from '../../controller/product/product.js';

const productRouter = express.Router();

productRouter.get("/get", getProduct);

export default productRouter;

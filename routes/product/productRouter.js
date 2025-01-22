import express from 'express';
import { getProduct, postProduct } from '../../controller/product/product.js';

const productRouter = express.Router();

productRouter.get("/get", getProduct);
productRouter.get("/post", postProduct);


export default productRouter;

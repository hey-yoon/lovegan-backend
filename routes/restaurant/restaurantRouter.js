import express from 'express';
import { getRestaurant } from '../../controller/restaurant/restaurant.js';

const restaurantRouter = express.Router();

restaurantRouter.get("/get", getRestaurant);

export default restaurantRouter;

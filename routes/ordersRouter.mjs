import { Router } from "express";
import validateMiddleware from "../middlewares/validateMiddleware.mjs";

import {
  getAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/ordersController.mjs";
import {
  createOrderSchema,
  updateOrderSchema,
} from "../validators/orderValidators.mjs";

const router = Router();

router
  .route("/")
  .get(getAllOrders)
  .post(createOrderSchema, validateMiddleware, createOrder);

router
  .route("/:id")
  .get(getOrder)
  .put(updateOrderSchema, validateMiddleware, updateOrder)
  .delete(deleteOrder);

export default router;

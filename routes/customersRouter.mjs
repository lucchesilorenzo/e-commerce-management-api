import { Router } from "express";
import validateMiddleware from "../middlewares/validateMiddleware.mjs";

import {
  getAllCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from "../controllers/customersController.mjs";
import {
  createCustomerSchema,
  updateCustomerSchema,
} from "../validators/customerValidators.mjs";

const router = Router();

router
  .route("/")
  .get(getAllCustomers)
  .post(createCustomerSchema, validateMiddleware, createCustomer);

router
  .route("/:id")
  .get(getCustomer)
  .put(updateCustomerSchema, validateMiddleware, updateCustomer)
  .delete(deleteCustomer);

export default router;

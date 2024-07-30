import { Router } from "express";
import validateMiddleware from "../middlewares/validateMiddleware.mjs";

import {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productsController.mjs";
import {
  createProductSchema,
  updateProductSchema,
} from "../validators/productValidators.mjs";

const router = Router();

router
  .route("/")
  .get(getAllProducts)
  .post(createProductSchema, validateMiddleware, createProduct);

router
  .route("/:id")
  .get(getProduct)
  .put(updateProductSchema, validateMiddleware, updateProduct)
  .delete(deleteProduct);

export default router;

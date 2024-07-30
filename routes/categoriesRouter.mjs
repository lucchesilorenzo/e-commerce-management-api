import { Router } from "express";
import validateMiddleware from "../middlewares/validateMiddleware.mjs";

import {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoriesController.mjs";
import {
  createCategorySchema,
  updateCategorySchema,
} from "../validators/categoryValidators.mjs";

const router = Router();

router
  .route("/")
  .get(getAllCategories)
  .post(createCategorySchema, validateMiddleware, createCategory);

router
  .route("/:id")
  .get(getCategory)
  .put(updateCategorySchema, validateMiddleware, updateCategory)
  .delete(deleteCategory);

export default router;

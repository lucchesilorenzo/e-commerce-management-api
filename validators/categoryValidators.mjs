import { checkSchema } from "express-validator";

export const createCategorySchema = checkSchema({
  name: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Category must not be empty",
    },
    isString: {
      errorMessage: "Category must be a string",
    },
    isLength: {
      options: {
        min: 3,
        max: 20,
      },
      errorMessage: "Category must be at least 3-20 characters long",
    },
  },
});

export const updateCategorySchema = checkSchema({
  name: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Category must not be empty",
    },
    isString: {
      errorMessage: "Category must be a string",
    },
    isLength: {
      options: {
        min: 3,
        max: 20,
      },
      errorMessage: "Category must be at least 3-20 characters long",
    },
  },
});

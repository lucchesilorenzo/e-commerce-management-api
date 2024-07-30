import { checkSchema } from "express-validator";

export const createProductSchema = checkSchema({
  name: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Product must not be empty",
    },
    isString: {
      errorMessage: "Product must be a string",
    },
    isLength: {
      options: {
        min: 3,
        max: 30,
      },
      errorMessage: "Product must be at least 3-30 characters long",
    },
  },
  description: {
    in: ["body"],
    optional: true,
    notEmpty: {
      errorMessage: "Description must not be empty",
    },
    isString: {
      errorMessage: "Description must be a string",
    },
    isLength: {
      options: {
        min: 3,
        max: 30,
      },
      errorMessage: "Description must be at least 3-30 characters long",
    },
  },
  price: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Price must not be empty",
    },
    isNumeric: {
      errorMessage: "Price must be a number",
    },
  },
  category: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Category must not be empty",
    },
    isMongoId: {
      errorMessage: "Category must be a valid MongoID",
    },
  },
  rating: {
    in: ["body"],
    optional: true,
    notEmpty: {
      errorMessage: "Rating must not be empty",
    },
    isNumeric: {
      errorMessage: "Rating must be a number",
    },
  },
  image: {
    in: ["body"],
    optional: true,
    notEmpty: {
      errorMessage: "Image URL must not be empty",
    },
    isURL: {
      errorMessage: "Image must be a URL",
    },
  },
});

export const updateProductSchema = checkSchema({
  description: {
    in: ["body"],
    optional: true,
    notEmpty: {
      errorMessage: "Description must not be empty",
    },
    isString: {
      errorMessage: "Description must be a string",
    },
    isLength: {
      options: {
        min: 3,
        max: 30,
      },
      errorMessage: "Description must be at least 3-30 characters long",
    },
  },
  price: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Price must not be empty",
    },
    isNumeric: {
      errorMessage: "Price must be a number",
    },
  },
  category: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Category must not be empty",
    },
    isMongoId: {
      errorMessage: "Category must be a valid MongoID",
    },
  },
  rating: {
    in: ["body"],
    optional: true,
    notEmpty: {
      errorMessage: "Rating must not be empty",
    },
    isNumeric: {
      errorMessage: "Rating must be a number",
    },
  },
  image: {
    in: ["body"],
    optional: true,
    notEmpty: {
      errorMessage: "Image URL must not be empty",
    },
    isURL: {
      errorMessage: "Image must be a URL",
    },
  },
});

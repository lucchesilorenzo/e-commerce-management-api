import { checkSchema } from "express-validator";

export const createOrderSchema = checkSchema({
  customer: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Customer must not be empty",
    },
    isMongoId: {
      errorMessage: "Customer must be a valid MongoID",
    },
  },
  product: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Product must not be empty",
    },
    isMongoId: {
      errorMessage: "Product must be a valid MongoID",
    },
  },
});

export const updateOrderSchema = checkSchema({
  customer: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Customer must not be empty",
    },
    isMongoId: {
      errorMessage: "Customer must be a valid MongoID",
    },
  },
  product: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Product must not be empty",
    },
    isMongoId: {
      errorMessage: "Product must be a valid MongoID",
    },
  },
});

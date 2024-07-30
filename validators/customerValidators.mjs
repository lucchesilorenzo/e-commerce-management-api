import { checkSchema } from "express-validator";

export const createCustomerSchema = checkSchema({
  name: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Customer must not be empty",
    },
    isString: {
      errorMessage: "Customer must be a string",
    },
    isLength: {
      options: {
        min: 3,
        max: 20,
      },
      errorMessage: "Customer must be at least 3-20 characters long",
    },
  },
  email: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Email must not be empty",
    },
    isEmail: {
      errorMessage: "Email must be valid",
    },
  },
  address: {
    in: ["body"],
    optional: true,
    notEmpty: {
      errorMessage: "Address number must not be empty",
    },
    isString: {
      errorMessage: "Address must be a string",
    },
  },
  phone: {
    in: ["body"],
    optional: true,
    notEmpty: {
      errorMessage: "Phone number must not be empty",
    },
    isMobilePhone: {
      errorMessage: "Phone number must be valid",
    },
  },
});

export const updateCustomerSchema = checkSchema({
  address: {
    in: ["body"],
    optional: true,
    notEmpty: {
      errorMessage: "Address must not be empty",
    },
    isString: {
      errorMessage: "Address must be a string",
    },
  },
  phone: {
    in: ["body"],
    optional: true,
    notEmpty: {
      errorMessage: "Phone number must not be empty",
    },
    isMobilePhone: {
      errorMessage: "Phone number must be valid",
    },
  },
});

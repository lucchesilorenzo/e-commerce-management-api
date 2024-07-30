import asyncHandler from "express-async-handler";
import { Customer } from "../models/customerSchema.mjs";

export const getAllCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find();

  if (!customers.length) {
    res.status(404);
    throw new Error("No customer was found");
  }

  return res.status(200).json(customers);
});

export const getCustomer = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const customer = await Customer.findById(id);

    return res.status(200).json(customer);
  } catch (err) {
    res.status(404);
    throw new Error("No customer was found");
  }
});

export const createCustomer = asyncHandler(async (req, res) => {
  const { data } = req;

  try {
    const newCustomer = new Customer({ ...data });
    await newCustomer.save();

    return res.status(201).json(newCustomer);
  } catch (err) {
    res.status(400);
    throw new Error("Customer is already in the database");
  }
});

export const updateCustomer = asyncHandler(async (req, res) => {
  const {
    params: { id },
    data: { name, address, phone },
  } = req;

  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      id,
      { name, address, phone },
      { new: true, runValidators: true }
    );
    return res.status(200).json(updatedCustomer);
  } catch (err) {
    res.status(404);
    throw new Error("No customer was found");
  }
});

export const deleteCustomer = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req;

  const deletedCustomer = await Customer.findByIdAndDelete(id);

  if (!deletedCustomer) {
    res.status(404);
    throw new Error("No customer was found");
  }

  return res.status(200).json({ message: "Customer was successfully deleted" });
});

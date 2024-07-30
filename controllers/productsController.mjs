import asyncHandler from "express-async-handler";
import { Product } from "../models/productSchema.mjs";

export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find().populate("category");

  if (!products.length) {
    res.status(404);
    throw new Error("No product was found");
  }

  return res.status(200).json(products);
});

export const getProduct = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const product = await Product.findById(id).populate("category");

    return res.status(200).json(product);
  } catch (err) {
    res.status(404);
    throw new Error("No product was found");
  }
});

export const createProduct = asyncHandler(async (req, res) => {
  const { data } = req;

  try {
    const newProduct = new Product({ ...data });
    await newProduct.save();

    return res.status(201).json(newProduct);
  } catch (err) {
    res.status(400);
    throw new Error("Product is already in the database");
  }
});

export const updateProduct = asyncHandler(async (req, res) => {
  const {
    params: { id },
    data: { description, image, price, rating, category },
  } = req;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { description, image, price, rating, category },
      { new: true, runValidators: true }
    );
    return res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(404);
    throw new Error("No product was found");
  }
});

export const deleteProduct = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req;

  const deletedProduct = await Product.findByIdAndDelete(id);

  if (!deletedProduct) {
    res.status(404);
    throw new Error("No product was found");
  }

  return res.status(200).json({ message: "Product was successfully deleted" });
});

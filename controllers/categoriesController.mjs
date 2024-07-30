import asyncHandler from "express-async-handler";
import { Category } from "../models/categorySchema.mjs";

export const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();

  if (!categories.length) {
    res.status(404);
    throw new Error("No category was found");
  }

  return res.status(200).json(categories);
});

export const getCategory = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const category = await Category.findById(id);

    return res.status(200).json(category);
  } catch (err) {
    res.status(404);
    throw new Error("No category was found");
  }
});

export const createCategory = asyncHandler(async (req, res) => {
  const { data } = req;

  try {
    const newCategory = new Category({ ...data });
    await newCategory.save();

    return res.status(201).json(newCategory);
  } catch (err) {
    res.status(400);
    throw new Error("Category is already in the database");
  }
});

export const updateCategory = asyncHandler(async (req, res) => {
  const {
    params: { id },
    data: { name },
  } = req;

  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { name },
      { new: true, runValidators: true }
    );
    return res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(404);
    throw new Error("No category was found");
  }
});

export const deleteCategory = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req;

  const deletedCategory = await Category.findByIdAndDelete(id);

  if (!deletedCategory) {
    res.status(404);
    throw new Error("No category was found");
  }

  return res.status(200).json({ message: "Category was successfully deleted" });
});

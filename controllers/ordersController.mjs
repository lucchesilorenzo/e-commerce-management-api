import asyncHandler from "express-async-handler";
import { Order } from "../models/orderSchema.mjs";

export const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find()
    .populate("customer")
    .populate({
      path: "product",
      populate: {
        path: "category",
        select: "name",
      },
    });

  if (!orders.length) {
    res.status(404);
    throw new Error("No order was found");
  }

  return res.status(200).json(orders);
});

export const getOrder = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const order = await Order.findById(id)
      .populate("customer")
      .populate({
        path: "product",
        populate: {
          path: "category",
          select: "name",
        },
      });

    return res.status(200).json(order);
  } catch (err) {
    res.status(404);
    throw new Error("No order was found");
  }
});

export const createOrder = asyncHandler(async (req, res) => {
  const { data } = req;

  try {
    const newOrder = new Order({ ...data });
    await newOrder.save();

    return res.status(201).json(newOrder);
  } catch (err) {
    res.status(400);
    throw new Error("Order is already in the database");
  }
});

export const updateOrder = asyncHandler(async (req, res) => {
  const {
    params: { id },
    data: { customer, product },
  } = req;

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { customer, product },
      { new: true, runValidators: true }
    );
    return res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(404);
    throw new Error("No order was found");
  }
});

export const deleteOrder = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req;

  const deletedOrder = await Order.findByIdAndDelete(id);

  if (!deletedOrder) {
    res.status(404);
    throw new Error("No order was found");
  }

  return res.status(200).json({ message: "Order was successfully deleted" });
});

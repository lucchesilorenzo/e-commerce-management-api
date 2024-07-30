import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: String,
  phone: String,
});

export const Customer = mongoose.model("Customer", CustomerSchema);

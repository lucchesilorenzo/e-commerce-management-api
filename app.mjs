import express from "express";
import cors from "cors";

import productsRouter from "./routes/productsRouter.mjs";
import ordersRouter from "./routes/ordersRouter.mjs";
import customersRouter from "./routes/customersRouter.mjs";
import categoriesRouter from "./routes/categoriesRouter.mjs";

import connectDB from "./config/db.mjs";
import errorMiddleware from "./middlewares/errorMiddleware.mjs";

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Welcome to the e-commerce management API!" });
});

app.use("/api/categories", categoriesRouter);
app.use("/api/customers", customersRouter);
app.use("/api/products", productsRouter);
app.use("/api/orders", ordersRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

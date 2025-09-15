import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("api is working");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

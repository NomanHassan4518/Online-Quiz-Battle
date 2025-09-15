import express from "express";
import Category from "../models/category.js";

const router = express.Router();

// Get all categories
router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

export default router;

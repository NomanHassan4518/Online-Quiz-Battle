import express from "express";
import Question from "../models/question.js";

const router = express.Router();

// Get questions by category
router.get("/:categoryId", async (req, res) => {
  const { categoryId } = req.params;
  const questions = await Question.find({ category: categoryId }).limit(10);
  res.json(questions);
});

export default router;

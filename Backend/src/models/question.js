import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  question: { type: String, required: true },
  options: [String],
  answer: { type: String, required: true },
});

const Question = mongoose.model("Question", questionSchema);

export default Question

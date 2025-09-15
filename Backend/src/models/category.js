import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  icon: String,
});

const Category = mongoose.model("Category", categorySchema);

export default Category;

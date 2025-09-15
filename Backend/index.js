import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import categoryRoutes from "./src/routes/categoryRoutes.js";
import questionRoutes from "./src/routes/questionRoutes.js";
// import { categories } from "./src/data/data.js";
// import { questions } from "./src/data/data.js";
// import Question from "./src/models/question.js";
// import Category from "./src/models/category.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/questions", questionRoutes);


// try {
//   const createdCategories = await Category.insertMany(categories);

//     const categoryMap = {};
//     createdCategories.forEach((cat) => {
//       categoryMap[cat.name] = cat._id;
//     });

//     const questionsWithIds = questions.map((q) => ({
//       ...q,
//       category: categoryMap[q.category],
//     }));

//     await Question.insertMany(questionsWithIds);

//     console.log("✅ Seed successful!");
//     process.exit();
// } catch (error) {
//   console.log(error.message);
// }

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

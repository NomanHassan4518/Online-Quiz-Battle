import express from "express";
import Leaderboard from "../models/Leaderboard.js";
import User from "../models/user.js";

const router = express.Router();

// Add score
router.post("/", async (req, res) => {
  try {
    const { userId, username, score } = req.body;

    if (!userId || !username || score === undefined) {
      return res.status(400).json({ message: "userId, username, and score are required" });
    }

    // Check if user exists in DB
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if leaderboard entry exists
    let entry = await Leaderboard.findOne({ userId });

    if (entry) {
      // Add score to totalScore
      entry.totalScore += score;
      await entry.save();
    } else {
      // Create new entry
      entry = new Leaderboard({ userId, username, totalScore: score });
      await entry.save();
    }

    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

});

// Get top 10 scorers
router.get("/", async (req, res) => {
  try {
    const topPlayers = await Leaderboard.find().sort({ score: -1 }).limit(10);
    res.json(topPlayers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;

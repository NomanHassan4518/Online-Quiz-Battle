import mongoose from "mongoose";

const leaderboardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
  username: { type: String, required: true },
  totalScore: { type: Number, default: 0 },
}, { timestamps: true });

const Leaderboard = mongoose.model("Leaderboard", leaderboardSchema);
export default Leaderboard;

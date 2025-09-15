import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import categoryRoutes from "./src/routes/categoryRoutes.js";
import questionRoutes from "./src/routes/questionRoutes.js";
import leaderboardRoutes from "./src/routes/leaderboardRoutes.js";

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.use(express.json());
app.use(cors());

// --- Routes ---
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/leaderboard", leaderboardRoutes);

// --- Socket.io Logic ---
const rooms = {}; // roomId => { players: [{ id, username, score }] }

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  // Join room
  socket.on("joinRoom", ({ roomId, username }) => {
    if (!rooms[roomId]) rooms[roomId] = { players: [] };

    // Avoid duplicate
    if (!rooms[roomId].players.find((p) => p.id === socket.id)) {
      rooms[roomId].players.push({ id: socket.id, username, score: 0 });
    }

    socket.join(roomId);

    io.to(roomId).emit("playersUpdate", rooms[roomId].players);

    // Start quiz when 2+ players
    if (rooms[roomId].players.length >= 2) {
      io.to(roomId).emit("startQuiz");
    }
  });

  // Handle answer
  socket.on("answer", ({ roomId, questionId, selected, isCorrect }) => {
    const room = rooms[roomId];
    if (!room) return;
    const player = room.players.find((p) => p.id === socket.id);
    if (!player) return;

    if (isCorrect) player.score += 10; // add points

    io.to(roomId).emit("playerAnswered", {
      playerId: socket.id,
      questionId,
      selected,
      score: player.score,
    });
  });

  // Disconnect
  socket.on("disconnect", () => {
    for (const roomId in rooms) {
      rooms[roomId].players = rooms[roomId].players.filter(
        (p) => p.id !== socket.id
      );
      io.to(roomId).emit("playersUpdate", rooms[roomId].players);
    }
    console.log("Client disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

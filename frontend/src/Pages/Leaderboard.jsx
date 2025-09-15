import { useEffect, useState } from "react";
import axios from "axios";
import { FaMedal } from "react-icons/fa";

const Leaderboard = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/leaderboard");
        setPlayers(data);
      } catch (error) {
        console.error("Failed to fetch leaderboard:", error);
      }
    };
    fetchLeaderboard();
  }, []);

  const getMedalColor = (index) => {
    switch (index) {
      case 0:
        return "text-yellow-400"; // Gold
      case 1:
        return "text-gray-400"; // Silver
      case 2:
        return "text-orange-500"; // Bronze
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="min-h-[calc(100vh-70px)] p-10 bg-gray-50">
      <h1 className="text-3xl font-bold mb-10 text-center text-gray-800">Global Leaderboard</h1>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <ul className="space-y-4">
          {players.map((player, idx) => (
            <li
              key={player._id}
              className="flex justify-between items-center p-4 border rounded-lg hover:shadow-md transition bg-gray-50"
            >
              <div className="flex items-center gap-3">
                {idx < 3 && <FaMedal className={`text-xl ${getMedalColor(idx)}`} />}
                <span className="font-semibold text-gray-800">{player.username}</span>
              </div>
              <span className="font-bold text-gray-700">{player.totalScore}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;

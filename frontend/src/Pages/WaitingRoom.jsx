import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); 

const WaitingRoom = () => {
  const { roomId } = useParams();
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const username = prompt("Enter your name") || "Player";

    // Join room
    socket.emit("joinRoom", { roomId, username });

    // Listen for players update
    socket.on("playersUpdate", (updatedPlayers) => {
      setPlayers(updatedPlayers);
    });

    // Start quiz when 2+ players join
    socket.on("startQuiz", () => {
      navigate(`/quiz/${roomId}`);
    });

    return () => {
      socket.off("playersUpdate");
      socket.off("startQuiz");
    };
  }, []);

  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-4">Waiting Room</h2>
      <p>Players in room: {players.length}</p>
      <ul>
        {players.map((p) => (
          <li key={p.id}>{p.username}</li>
        ))}
      </ul>
      {players.length < 2 && (
        <p className="mt-4 text-red-500">
          Waiting for another player to join...
        </p>
      )}
    </div>
  );
};

export default WaitingRoom;

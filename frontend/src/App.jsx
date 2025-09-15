import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Register from "./Pages/Account/Register";
import Login from "./Pages/Account/Login";
import QuizLobby from "./Pages/QuizLobby";
import { useEffect } from "react";
import QuizPage from "./Pages/QuizPage";
import WaitingRoom from "./Pages/WaitingRoom";
import Leaderboard from "./Pages/Leaderboard";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      navigate("/quiz-lobby");
    }
  },[]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/quiz-lobby" element={<QuizLobby />}></Route>
        <Route path="/waiting/:roomId" element={<WaitingRoom />}></Route>
        <Route path="/quiz/:categoryId" element={<QuizPage />}></Route>
        <Route path="/leaderboard" element={<Leaderboard />}></Route>
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;

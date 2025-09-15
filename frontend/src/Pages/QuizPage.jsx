import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa";
import { io } from "socket.io-client";
import Spinner from "../components/Spinner";

const socket = io("http://localhost:5000"); 

const QuizPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timer, setTimer] = useState(15);
  const [showResult, setShowResult] = useState(false);
  const [players, setPlayers] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const username = user.name;

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/questions/${categoryId}`
        );
        setQuestions(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [categoryId]);

  useEffect(() => {
    socket.emit("joinRoom", { roomId: categoryId, username });

    socket.on("playersUpdate", (playersList) => setPlayers(playersList));
    socket.on("startQuiz", () => setQuizStarted(true));
    socket.on("playersScores", (scores) => setPlayers(scores));

    return () => {
      socket.off("playersUpdate");
      socket.off("startQuiz");
      socket.off("playersScores");
    };
  }, [categoryId, username]);

  // --- Timer ---
  useEffect(() => {
    if (!quizStarted || showResult || loading) return;

    if (timer === 0) handleNext();

    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer, quizStarted, showResult, loading]);

  // --- Submit Score on Quiz Completion ---
  useEffect(() => {
    const submitScore = async () => {
      if (showResult) {
        try {
          await axios.post("http://localhost:5000/api/leaderboard", {
            userId: user.id,
            username,
            score,
          });
        } catch (err) {
          console.error(err);
        }
      }
    };
    submitScore();
  }, [showResult, score, username]);

  if (loading) return <Spinner />;
  if (!questions.length)
    return <p className="text-center mt-20">No questions available.</p>;

  if (!quizStarted)
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-70px)]">
        <h2 className="text-2xl font-bold mb-4">Waiting for players...</h2>
        <p className="text-gray-600 mb-4">
          Players joined: {players.length} / 2
        </p>
        <Spinner />
      </div>
    );

  const currentQuestion = questions[currentIndex];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    const isCorrect = option === currentQuestion.answer;

    if (isCorrect) setScore((prev) => prev + 10);

    socket.emit("answer", {
      roomId: categoryId,
      questionId: currentQuestion._id,
      selected: option,
      isCorrect,
    });
  };

  // --- Handle Next Question ---
  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setTimer(15);
    } else {
      setShowResult(true);
      socket.emit("submitScore", { roomId: categoryId });
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setTimer(15);
    setShowResult(false);
    setQuizStarted(false);
    navigate("/quiz-lobby");
  };

  if (showResult)
    return (
      <div className="min-h-[calc(100vh-70px)] flex flex-col items-center justify-center px-6">
        <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
        <p className="text-xl mb-6">Your Score: {score}</p>

        <button
          onClick={handleRestart}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Back to Lobby
        </button>
      </div>
    );

  return (
    <div className="min-h-[calc(100vh-70px)] bg-gray-50 px-6 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#0b2b4a]">
            Question {currentIndex + 1} of {questions.length}
          </h2>
          <span className="text-gray-600 font-semibold">Time: {timer}s</span>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold mb-6">
          {currentQuestion.question}
        </h3>

        <div className="grid grid-cols-1 gap-4">
          {currentQuestion.options.map((option, idx) => {
            let bgClass = "bg-gray-100 hover:bg-gray-200";
            if (selectedOption) {
              if (option === selectedOption) {
                bgClass =
                  option === currentQuestion.answer
                    ? "bg-green-200 border-green-500"
                    : "bg-red-200 border-red-500";
              } else if (option === currentQuestion.answer) {
                bgClass = "bg-green-200 border-green-500";
              }
            }
            return (
              <button
                key={idx}
                onClick={() => handleOptionClick(option)}
                className={`px-4 py-3 rounded-lg border transition text-left ${bgClass}`}
                disabled={!!selectedOption}
              >
                {option}
                {selectedOption &&
                  selectedOption !== currentQuestion.answer &&
                  option === currentQuestion.answer && (
                    <span className="ml-2 font-semibold text-green-700">
                      (Correct Answer)
                    </span>
                  )}
              </button>
            );
          })}
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition ${
              selectedOption
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Next <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;

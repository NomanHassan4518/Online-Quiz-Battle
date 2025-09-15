import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaTrophy,
  FaRobot,
  FaMicrochip,
  FaNetworkWired,
  FaDatabase,
  FaMobileAlt,
  FaLaptopCode,
} from "react-icons/fa";

const QuizLobby = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Icon and color mapping
  const categoryMeta = {
    "Artificial Intelligence": {
      icon: <FaRobot className="text-4xl text-blue-600" />,
      color: "bg-blue-100",
    },
    "Hardware & Chips": {
      icon: <FaMicrochip className="text-4xl text-green-600" />,
      color: "bg-green-100",
    },
    "Networking & Security": {
      icon: <FaNetworkWired className="text-4xl text-red-600" />,
      color: "bg-red-100",
    },
    "Databases & Cloud": {
      icon: <FaDatabase className="text-4xl text-purple-600" />,
      color: "bg-purple-100",
    },
    "Mobile Tech": {
      icon: <FaMobileAlt className="text-4xl text-pink-600" />,
      color: "bg-pink-100",
    },
    "Programming & Software": {
      icon: <FaLaptopCode className="text-4xl text-yellow-600" />,
      color: "bg-yellow-100",
    },
  };

  // Fetch categories from backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/categories"); // replace with your backend URL
        const data = await res.json();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleJoin = (category) => {
    navigate(`/waiting/${category._id}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-70px)]">
        <p className="text-gray-600 text-lg">Loading categories...</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-70px)] bg-gray-50 px-6 py-10">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-[#0b2b4a] mb-3">
            Tech Quiz Lobby
          </h1>
          <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Pick a category, join a live quiz room, and compete with other
            players in real-time. Answer quickly to earn higher points, climb
            the leaderboard, and showcase your skills.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const meta = categoryMeta[category.name] || {};
            return (
              <div
                key={category._id}
                className={`p-6 rounded-lg hover:shadow-md  ${meta.color}`}
                onClick={() => handleJoin(category)}
              >
                <div className="mb-4 flex justify-center">
                  {meta.icon || "📚"}
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {category.name}
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  {category.description}
                </p>
                <button
                  className="mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
                  onClick={() => handleJoin(category)}
                >
                  Join Quiz
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <Link to="/leaderboard"
            className="flex w-[40%] justify-center items-center gap-2 px-8 py-3 bg-yellow-500 text-white text-lg font-semibold rounded-lg shadow hover:bg-yellow-600 transition mx-auto"
          >
            <FaTrophy /> View Leaderboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizLobby;

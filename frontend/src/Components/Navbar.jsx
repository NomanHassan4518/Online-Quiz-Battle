import { IoGameController } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="bg-black text-white">
      <div className="px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 font-sans">
          <IoGameController className="text-3xl text-yellow-500" />
          <span className="text-xl font-bold">Online Quiz Battle</span>
        </Link>

        {user ? (
          <p>{user?.name}</p>
        ) : (
          <div className="space-x-4 ">
            <Link to="/login" className="hover:text-yellow-500">
              Login
            </Link>
            <Link to="/register" className="hover:text-yellow-500">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

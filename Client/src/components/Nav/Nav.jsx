import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <div>
      <SearchBar />

      <Link to="/home">
        <button>Home</button>
      </Link>

      <Link to="/about">
        <button>About</button>
      </Link>
    </div>
  );
};

export default Nav;

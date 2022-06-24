import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import "./styles.css";

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="nav-link-container">
        <Link className="nav-link" to="/">
          Discover
        </Link>

        <Link className="nav-link" to="/mylist">
          My List
        </Link>
      </div>
      <div className="searchbar-container">
        <SearchBar />
      </div>
      <div className="placeholder">placeholder</div>
    </header>
  );
};

export default NavBar;

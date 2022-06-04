import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [input, setInput] = useState("");

  return (
    <div className="searchbar">
      <input
        className="searchbox"
        placeholder="Search"
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
      <Link to={`/search/${input}`}>
        <button className="search-button">
          <FontAwesomeIcon icon={faSearch} color="#b4b2b8" size="1x" />
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;

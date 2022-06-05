import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handlePressKey = (e: React.KeyboardEvent) =>
    e.key === "Enter" && navigate("/search/" + input);

  return (
    <div className="searchbar">
      <input
        className="searchbox"
        placeholder="Search"
        type="text"
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={(e) => handlePressKey(e)}
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

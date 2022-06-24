import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handlePressKey = (e: React.KeyboardEvent) => {
    if (input === "") {
      return;
    }
    e.key === "Enter" && navigate("/search/" + input);
  };

  const handleClick = () => {
    if (input === "") {
      return;
    }
    navigate("/search/" + input);
  };

  return (
    <div className="searchbar">
      <input
        required
        className="searchbox"
        placeholder="Search"
        type="text"
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={(e) => handlePressKey(e)}
      />

      <button onClick={handleClick} className="search-button">
        <FontAwesomeIcon icon={faSearch} color="#b4b2b8" size="1x" />
      </button>
    </div>
  );
};

export default SearchBar;

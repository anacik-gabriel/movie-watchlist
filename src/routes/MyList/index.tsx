import NavBar from "../../Components/NavBar";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import { useWatchlistContext } from "../../contexts/WatchlistContext";

const MyList = () => {
  const { watchlist, setWatchlist } = useWatchlistContext();

  const handleDelete = (id: string) => {
    setWatchlist((list) => list.filter((movie) => movie.id !== id));
  };

  const handleLocalClear = () => {
    setWatchlist([]);
  };

  const makeList = () => {
    const newList = watchlist.map((entry, index) => {
      return (
        <div className="listelement" key={entry.id}>
          <div className="id2">{index + 1}</div>
          <div className="title2">{entry.title}</div>
          <button
            className="clear-button"
            onClick={() => handleDelete(entry.id)}
          >
            <FontAwesomeIcon icon={faCircleXmark} size="2x" />
          </button>
        </div>
      );
    });
    return newList;
  };

  return (
    <>
      <NavBar />
      <div className="explainbar">
        <div className="id">#</div>
        <div className="title">Title</div>
        <button className="remove-all" onClick={handleLocalClear}>
          Clear List
        </button>
      </div>
      <div className="list">{makeList()}</div>
    </>
  );
};

export default MyList;

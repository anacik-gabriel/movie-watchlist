import { faFileVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import { SearchQueries } from "./types";
import "./styles.css";

const Search = () => {
  const params = useParams();
  const [queries, setQueries] = useState<SearchQueries>();
  useEffect(() => {
    getSearchQueries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.query]);

  const getSearchQueries = async () => {
    try {
      const response = await axios.get(
        `https://search.imdbot.workers.dev/?q=${params.query}`
      );
      setQueries(response);
    } catch (error) {
      console.log(error);
    }
  };

  const mapQueries = () => {
    const gallery = queries?.data.description.map((query) => {
      return (
        <div className="cardcontainer" key={query["#IMDB_ID"]}>
          <div className="cardcontainer-inside">
            <h2>{query["#TITLE"]}</h2>
            <Link to={`/details/${query["#IMDB_ID"]}`}>
              <button className="detail-button">
                <FontAwesomeIcon icon={faFileVideo} /> DETAILS{" "}
              </button>
            </Link>
            <h3>{query["#YEAR"]}</h3>
          </div>
          <img
            alt="Nothing"
            className="card"
            src={
              query["#IMG_POSTER"] ??
              "https://www.rosemacsales.com/assets/images/no_image.png"
            }
          />
        </div>
      );
    });
    return gallery;
  };

  return (
    <>
      <NavBar />{" "}
      <div className="gallery">
        <h1>Search results for: {params.query}</h1>
        <div className="search-container">{mapQueries()}</div>
      </div>
    </>
  );
};

export default Search;

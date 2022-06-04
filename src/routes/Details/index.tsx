import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { API_KEY, IMDB_API } from "../../consts";
import { imdbMovie, imdbMovieApiResponse } from "../../types/imdbTypes";
import { useWatchlistContext } from "../../contexts/WatchlistContext";

const Details = () => {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState<imdbMovie>();
  const [movieTrailer, setMovieTrailer] = useState<imdbMovie>();
  useEffect(() => {
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { watchlist, setWatchlist } = useWatchlistContext();

  const getDetails = async () => {
    try {
      const movieData: imdbMovieApiResponse = await axios.get(
        `${IMDB_API}Title/${API_KEY}/${params.id}`
      );
      const movieTrailer: imdbMovieApiResponse = await axios.get(
        `${IMDB_API}Trailer/${API_KEY}/${params.id}`
      );
      setMovieDetails(movieData.data);
      setMovieTrailer(movieTrailer.data);
    } catch (error) {
      console.log(error);
    }
  };

  const mapGenres = () =>
    movieDetails?.genres.split(", ").map((value, index) => (
      <span key={index} className="genre">
        {value}
      </span>
    ));

  const handleClick = (action: "add" | "remove") => {
    if (!movieDetails) return;

    if (action === "add") {
      setWatchlist((prevWatchlist) => [...prevWatchlist, movieDetails]);
    }

    if (action === "remove") {
      setWatchlist((prevWatchlist) =>
        prevWatchlist.filter((movie) => movie.id !== movieDetails.id)
      );
    }
  };

  const addButton = (
    <button className="list-button" onClick={() => handleClick("add")}>
      <FontAwesomeIcon icon={faPlus} style={{ marginRight: "10px" }} />
      Add to Watchlist
    </button>
  );

  const removeButton = (
    <button className="list-button" onClick={() => handleClick("remove")}>
      <FontAwesomeIcon icon={faMinus} style={{ marginRight: "10px" }} />
      Remove from Watchlist
    </button>
  );

  return (
    <>
      <NavBar />

      <div className="main-container">
        <div className="title-container">
          <div className="movie-title">{movieDetails?.fullTitle}</div>
        </div>
        <div className="media-container">
          <div className="poster-container">
            <img alt="" src={movieDetails?.image} />
          </div>{" "}
          <div className="video-frame">
            <iframe
              title="trailer"
              width="100%"
              height="100%"
              src={movieTrailer?.linkEmbed}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="synopsis-container">
          <div className="details">
            <div className="genres">{mapGenres()}</div>
            <div className="synopsis">{movieDetails?.plot}</div>
          </div>
          <div className="list-buttons">
            {watchlist.find((movie) => movie.id === movieDetails?.id)
              ? removeButton
              : addButton}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;

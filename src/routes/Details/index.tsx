import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { imdbMovie, imdbMovieApiResponse } from "../../types/imdbTypes";
import { useWatchlistContext } from "../../contexts/WatchlistContext";
import { SyncLoader } from "react-spinners";
import novideo from "../../assets/no-video.png";

const Details = () => {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState<imdbMovie>();
  const [movieTrailer, setMovieTrailer] = useState<imdbMovie>();
  const { watchlist, setWatchlist } = useWatchlistContext();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDetails = async () => {
    const API_KEY = process.env.REACT_APP_IMDB_API_KEY;

    try {
      const movie: imdbMovieApiResponse = await axios.get(
        `https://imdb-api.com/en/API/Title/${API_KEY}/${params.id}`
      );
      const trailer: imdbMovieApiResponse = await axios.get(
        `https://imdb-api.com/en/API/Trailer/${API_KEY}/${params.id}`
      );
      setMovieDetails(movie.data);
      setMovieTrailer(trailer.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (movieTrailer?.linkEmbed === null) {
      console.log(movieTrailer?.linkEmbed);
      setVideoLoaded(true);
    }
  }, [movieTrailer]);

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
      {videoLoaded && imageLoaded ? (
        ""
      ) : (
        <div className="loader-container">
          <SyncLoader size={50} color={"orange"} />
        </div>
      )}
      <div
        className={
          videoLoaded && imageLoaded
            ? "main-container"
            : "main-container-transparent"
        }
      >
        <div className="title-container">
          <div className="movie-title">{movieDetails?.fullTitle}</div>
        </div>
        <div className="media-container">
          <img
            alt=""
            onLoad={() => setImageLoaded(true)}
            src={movieDetails?.image}
          />

          <div className="video-frame">
            {movieTrailer?.linkEmbed === null ? (
              <img alt="" src={novideo} />
            ) : (
              <iframe
                onLoad={() => setVideoLoaded(true)}
                title="trailer"
                width="854px"
                height="100%"
                src={movieTrailer?.linkEmbed}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            )}
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

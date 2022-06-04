import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faFileVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { imdbMoviesApiResponse } from "../../types/imdbTypes";
import "./styles.css";
import { SliderProps } from "./types";

const Slider = ({ movietype, title }: SliderProps) => {
  const [movies, setMovies] = useState<imdbMoviesApiResponse>();
  const slider = useRef<HTMLDivElement>(null);
  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMovies = async () => {
    try {
      const response: imdbMoviesApiResponse = await axios.get(
        `https://imdb-api.com/en/API/${movietype}/k_fusoay1f`
      );
      setMovies(response);
    } catch (error) {
      console.log(error);
    }
  };

  const moveSlider = (direction: "left" | "right") => {
    if (slider.current === null) {
      return;
    }
    if (
      slider.current.scrollLeft + slider.current.offsetWidth ===
      slider.current.scrollWidth
    ) {
      slider.current.scrollLeft = 0;
    }
    const move = direction === "left" ? -1350 : 1350;
    slider.current.scrollLeft += move;
  };

  return (
    <>
      <div className="divider">
        <div className="title-containerr">
          <h2>{title}</h2>
        </div>
        <div className="line"></div>
        <div className="buttons-container">
          <button className="buttonleft" onClick={() => moveSlider("left")}>
            <FontAwesomeIcon icon={faArrowCircleLeft} color="white" size="2x" />
          </button>

          <button className="buttonright" onClick={() => moveSlider("right")}>
            <FontAwesomeIcon
              icon={faArrowCircleRight}
              color="white"
              size="2x"
            />
          </button>
        </div>
      </div>
      <div className="sliderContainer" ref={slider}>
        {movies?.data.items.map((movie) => {
          return (
            <div className="cardcontainer" key={movie.id}>
              <div className="cardcontainer-inside">
                <h2>{movie.fullTitle}</h2>
                <Link to={`/details/${movie.id}`}>
                  <button className="detail-button">
                    <FontAwesomeIcon icon={faFileVideo} /> DETAILS{" "}
                  </button>
                </Link>
                <h3>{movie.year}</h3>
              </div>
              <img alt="Nothing" className="card" src={movie.image} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Slider;

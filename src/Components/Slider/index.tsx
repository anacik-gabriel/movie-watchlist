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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const SliderO = ({ movietype, title }: SliderProps) => {
  const [movies, setMovies] = useState<imdbMoviesApiResponse>();
  const slider = useRef<OwlCarousel>(null);
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
    if (direction === "left") {
      slider.current.prev(500);
    } else {
      slider.current.next(500);
    }
  };
  const settings = {
    nav: false,
    items: 13,
    loop: true,
    margin: 10,
    dots: false,
    lazyLoad: true,
    slideBy: "page",
    stagePadding: 10,
    rewind: false,
    responsive: {
      3200: {
        items: 13,
      },
      3000: {
        items: 12,
      },
      2700: {
        items: 11,
      },
      2500: {
        items: 10,
      },
      2200: {
        items: 9,
      },
      2000: {
        items: 8,
      },
      1800: {
        items: 7,
      },

      1650: {
        items: 6,
        margin: 0,
      },
      1500: {
        items: 6,
      },

      1250: {
        items: 5,
      },
      1050: {
        items: 4,
      },
      800: {
        items: 3,
        margin: 0,
      },
      0: {
        items: 2,
      },
    },
  };
  return (
    <>
      <div className="wrapper">
        <div className="divider">
          <div className="title-containerr">
            <h2>{title}</h2>
          </div>
          <div className="line"></div>
          <div className="buttons-container">
            <button className="buttonleft" onClick={() => moveSlider("left")}>
              <FontAwesomeIcon
                icon={faArrowCircleLeft}
                color="white"
                size="2x"
              />
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

        <OwlCarousel ref={slider} className="owl-theme" {...settings}>
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
                <img
                  alt="Nothing"
                  className="card owl-lazy"
                  data-src={movie.image}
                />
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </>
  );
};

export default SliderO;

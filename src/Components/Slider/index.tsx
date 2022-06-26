import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faFileVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { imdbMoviesApiResponse } from "../../types/imdbTypes";
import "./styles.css";
import { SliderProps } from "./types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Lazy } from "swiper";

const settings = {
  spaceBetween: 50,
  speed: 1000,
  slidesPerView: 14,
  slidesPerGroup: 14,
  preloadImages: false,
  lazy: { loadPrevNextAmount: 14, loadOnTransitionStart: true },
  modules: [Lazy],
  loop: false,
  breakpoints: {
    3200: {
      slidesPerView: 13,
      slidesPerGroup: 13,
      lazy: { loadPrevNextAmount: 13, loadOnTransitionStart: true },
    },
    3000: {
      slidesPerView: 12,
      slidesPerGroup: 12,
      lazy: { loadPrevNextAmount: 12, loadOnTransitionStart: true },
    },
    2700: {
      slidesPerView: 11,
      slidesPerGroup: 11,
      lazy: { loadPrevNextAmount: 11, loadOnTransitionStart: true },
    },
    2500: {
      slidesPerView: 10,
      slidesPerGroup: 10,
      lazy: { loadPrevNextAmount: 10, loadOnTransitionStart: true },
    },
    2200: {
      slidesPerView: 9,
      slidesPerGroup: 9,
      lazy: { loadPrevNextAmount: 9, loadOnTransitionStart: true },
    },
    2000: {
      slidesPerView: 8,
      slidesPerGroup: 8,
      lazy: { loadPrevNextAmount: 8, loadOnTransitionStart: true },
    },
    1800: {
      slidesPerView: 7,
      slidesPerGroup: 7,
      lazy: { loadPrevNextAmount: 7, loadOnTransitionStart: true },
    },

    1650: {
      slidesPerView: 6,
      slidesPerGroup: 6,
      lazy: { loadPrevNextAmount: 6, loadOnTransitionStart: true },
    },

    1250: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      lazy: { loadPrevNextAmount: 5, loadOnTransitionStart: true },
    },
    1050: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      lazy: { loadPrevNextAmount: 4, loadOnTransitionStart: true },
    },
    800: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      lazy: { loadPrevNextAmount: 3, loadOnTransitionStart: true },
    },
    0: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      lazy: { loadPrevNextAmount: 2, loadOnTransitionStart: true },
    },
  },
};

const Slider = ({ movietype, title }: SliderProps) => {
  const [movies, setMovies] = useState<imdbMoviesApiResponse>();
  const [swiperRef, setSwiperRef] = useState<any>();

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMovies = async () => {
    const API_KEY = process.env.REACT_APP_IMDB_API_KEY;

    try {
      const response: imdbMoviesApiResponse = await axios.get(
        `https://imdb-api.com/en/API/${movietype}/${API_KEY}`
      );
      setMovies(response);
    } catch (error) {
      console.log(error);
    }
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
            <button
              className="buttonleft"
              onClick={() => swiperRef.slidePrev()}
            >
              <FontAwesomeIcon
                icon={faArrowCircleLeft}
                color="white"
                size="2x"
              />
            </button>

            <button
              className="buttonright"
              onClick={() => swiperRef.slideNext()}
            >
              <FontAwesomeIcon
                icon={faArrowCircleRight}
                color="white"
                size="2x"
              />
            </button>
          </div>
        </div>

        {movies?.data.items.length === 0 ? (
          <div className="error">Sorry, nothing to see here at the moment!</div>
        ) : (
          <Swiper onSwiper={(swiper) => setSwiperRef(swiper)} {...settings}>
            {movies?.data.items.map((movie, index) => {
              return (
                <SwiperSlide key={movie.id}>
                  <div className="cardcontainer">
                    <div className="cardcontainer-inside">
                      <h2>{movie.fullTitle}</h2>
                      <Link to={`/details/${movie.id}`}>
                        <button className="detail-button">
                          <FontAwesomeIcon icon={faFileVideo} /> DETAILS{" "}
                        </button>
                      </Link>
                      <h3>{movie.year}</h3>
                    </div>
                    {index < 14 ? (
                      <img alt="" className="card" src={movie.image} />
                    ) : (
                      <>
                        <img
                          alt=""
                          className="card swiper-lazy"
                          data-src={movie.image}
                        />
                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                      </>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </>
  );
};

export default Slider;

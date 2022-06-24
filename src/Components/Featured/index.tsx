import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileVideo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="featured-container">
      <div className="featured-content">
        <div className="featured-title">Breaking Bad</div>
        <div className="featured-synopsis">
          A high school chemistry teacher diagnosed with inoperable lung cancer
          turns to manufacturing and selling methamphetamine in order to secure
          his family's future.
          <button className="featured-button">
            <Link className="featured-button" to="/details/tt0903747">
              <FontAwesomeIcon icon={faFileVideo} /> DETAILS{" "}
            </Link>
          </button>
        </div>
      </div>
      <div className="image-container">
        <div className="gradient">
          <div className="gradient2">
            <div className="image"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

import "./pagination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faAngleLeft,
  faAngleRight,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";

function Pagination({ info, goToPage }) {
  const left2 = <FontAwesomeIcon icon={faAnglesLeft} />;
  const left1 = <FontAwesomeIcon icon={faAngleLeft} />;
  const right1 = <FontAwesomeIcon icon={faAngleRight} />;
  const right2 = <FontAwesomeIcon icon={faAnglesRight} />;

  const handleHome = () => {
    goToPage(1);
  };

  const handlePrev = () => {
    goToPage(info.prevPage);
  };

  const handleNext = () => {
    goToPage(info.nextPage);
  };

  const handleLast = () => {
    goToPage(info.totalPages);
  };

  return (
    <>
      <button className="pagButton" onClick={handleHome}>
        {left2}
      </button>

      <button className="pagButton" onClick={handlePrev}>
        {left1}
      </button>

      <button className="pagButton" onClick={handleNext}>
        {right1}
      </button>

      <button className="pagButton" onClick={handleLast}>
        {right2}
      </button>
    </>
  );
}

export default Pagination;
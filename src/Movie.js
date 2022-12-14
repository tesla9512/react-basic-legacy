import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, genres, url }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt="cover" className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          {/* <Link to={`/movie/${id}`}>{title}</Link> */}
          <a rel="noopener noreferrer" target="_blank" href={url}>
            {title}
          </a>
        </h2>
        <p>{summary.length > 297 ? `${summary.slice(0, 297)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;

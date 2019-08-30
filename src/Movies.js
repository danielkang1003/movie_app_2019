import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
function Movie({ title, summary, genres, year, rating, runtime, poster, url }) {
     let h = Math.floor(runtime / 60);
     let m = runtime % 60;
     h = h < 10 ? "0" + h : h;
     m = m < 10 ? "0" + m : m;
     return (
          <div className="movie">
               <img src={poster} alt={title} title={title} />
               <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">year: {year}</h5>
                    <h5 className="movie__rate">rate: {rating} / 10.0</h5>
                    <h5 className="movie__time">
                         time: {h}hour {m} min
                    </h5>
                    <ul className="genre">
                         {genres.map((genre, index) => (
                              <li key={index} className="genres__genre">
                                   {genre}
                              </li>
                         ))}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                    <a href={url}>Watch:{title}</a>
               </div>

               <br />
          </div>
     );
}

Movie.propTypes = {
     id: PropTypes.number.isRequired,
     title: PropTypes.string.isRequired,
     summary: PropTypes.string.isRequired,
     genres: PropTypes.arrayOf(PropTypes.string).isRequired,
     year: PropTypes.number.isRequired,
     rating: PropTypes.number.isRequired,
     runtime: PropTypes.number.isRequired,
     poster: PropTypes.string.isRequired,
     url: PropTypes.string.isRequired
};

export default Movie;

import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
function Movie({
     id,
     title,
     summary,
     genres,
     year,
     rating,
     runtime,
     poster,
     url
}) {
     return (
          <div class="movie">
               <h2>Movie</h2>
               <img src={poster} alt={title} title={title} />
               <div class="movie__data">
                    <h3 class="movie__title">Title:{title}</h3>
                    <h5 class="movie__year">year: {year}</h5>
                    <h5 class="movie__genre">genre: {genres}</h5>
                    <h5 class="movie__rate">rate: {rating}</h5>
                    <h5 class="movie__time">time: {runtime}</h5>
                    <p class="movie__summary">{summary}</p>
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
     genres: PropTypes.array.isRequired,
     year: PropTypes.number.isRequired,
     rating: PropTypes.number.isRequired,
     runtime: PropTypes.number.isRequired,
     poster: PropTypes.string.isRequired,
     url: PropTypes.string.isRequired
};

export default Movie;

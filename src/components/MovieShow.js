// ./src/components/MovieShow.js
import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({movies}) {
    // call useParams to access the `params` from the url
  const params = useParams();
  return (
    <div>
        <h3>{movies[params.movieId].title}</h3>
    </div>
  );
}

export default MovieShow;
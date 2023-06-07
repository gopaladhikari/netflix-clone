import React, { useEffect, useState } from "react";
import instance from "../axios";
import "./Rows.css";

function Rows({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  const fetchData = async () => {
    const response = await instance.get(fetchUrl);
    setMovies(response.data.results);
    return response;
  };

  useEffect(() => {
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 style={{ marginBottom: "1rem" }}> {title} </h2>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row_poster ${isLargeRow && "row_posterLarge"} `}
              src={`${baseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Rows;

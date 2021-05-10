import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Favorites = () => {
  const { favorites } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Favorites</h1>
        </div>

        {favorites.length > 0 ? (
          <div className="movie-grid">
            {favorites.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="favorites" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};

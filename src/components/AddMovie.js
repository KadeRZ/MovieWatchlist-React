import React, { useState } from "react";

export const AddMovie = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=3b05444824eda7017c57640089b4e650&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input">
            <input type="text" placeholder="Search movies..." value={query} onChange={onChange}/>
          </div>

          {results.length > 0 && (
            <ul className="movie-results">
              {results.map((movie) => (
                <li>{movie.title}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
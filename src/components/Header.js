import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="content-container">
          <div className="logo">
            <Link to="/">Movie<span>Library</span></Link>
          </div>

          <ul className="links">
            <li>
              <Link to="/">My Watchlist</Link>
            </li>

            <li>
              <Link to="/watched">Watched</Link>
            </li>

            <li>
              <Link to="/add" className="btn">Add Movies</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

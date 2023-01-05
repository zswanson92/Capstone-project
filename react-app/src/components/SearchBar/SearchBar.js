import React from "react";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = () => {

  return (
    <div className="main-search-container">
      <form className="search-form">
        <input
          type="search"
          placeholder="Search..."
          className="search-bar"
        />
        <button disabled={true} type="submit" className="search-button"><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
    </div>
  );
};

export default SearchBar;

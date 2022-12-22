import React, { useState } from "react";
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
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;

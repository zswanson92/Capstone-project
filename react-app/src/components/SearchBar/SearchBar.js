import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getResultsThunk } from "../../store/search";
import "./SearchBar.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState("name");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const searchResults = await dispatch(getResultsThunk(filter, searchInput));

    if (searchResults) {
      return history.push(`/search/?business=${searchInput}&filter=${filter}`);
    }
  };

  return (
    <div className="main-search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        {/* <div className="searchbar-container"> */}
          <div className="the-searchbar-div">
            <input
              type="search"
              placeholder="Search..."
              className="search-bar"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              required={true}
            />

            <select
              className="queryParams"
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              required
            >
              <option disabled>Filters:</option>
              <option value={"name"}>Name</option>
              <option value={"location"}>Location</option>
              <option value={"tags"}>Tags</option>
            </select>

            <button type="submit" className="search-button"><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
        {/* </div> */}
      </form>
    </div>
  );
};

export default SearchBar;

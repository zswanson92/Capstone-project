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
        <input
          type="search"
          placeholder="Search..."
          className="search-bar"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <select
          className="queryParams"
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          required
        >
          <option disabled>Filters:</option>
          <option value={"name"}>By Business Name</option>
          <option value={"location"}>By Location</option>
          <option value={"tags"}>By Tags</option>
        </select>

        <button type="submit" className="search-button"><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
    </div>
  );
};

export default SearchBar;

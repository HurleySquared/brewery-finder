import React from "react";
import BrewContext from "../../utils/BrewContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./search.css";

function brewSearch() {
  return (
    <BrewContext.Consumer>
      {({ search, handleInputChange, handleFormSubmit }) => (
        <form>
          <div className="search-bar">
            <label htmlFor="search">Search A City</label>
            <span>
            <input
              onChange={handleInputChange}
              value={search}
              name="search"
              type="text"
              id="search"
              placeholder="Charlotte"
            />
            <FontAwesomeIcon icon="search"
              onClick={handleFormSubmit}
              id="brewBtn"
              />
            </span>
          </div>
        </form>
      )}
    </BrewContext.Consumer>
  );
}

export default brewSearch;
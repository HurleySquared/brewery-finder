import React from "react";
import BrewContext from "../../utils/BrewContext";
import "./search.css";

function brewSearch() {
  return (
    <BrewContext.Consumer>
      {({ search, handleInputChange, handleFormSubmit }) => (
        <form>
          <div>
            <div className="search-bar">
              <label htmlFor="search">Search A City</label>
              <input
                onChange={handleInputChange}
                value={search}
                name="search"
                type="text" 
                id="search" 
                placeholder="charlotte"
                />
              <button 
                onClick={handleFormSubmit}
                id="brewBtn"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      )}
    </BrewContext.Consumer>
  );
}

export default brewSearch;
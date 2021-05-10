import React from "react";
import BrewContext from "../../utils/BrewContext";
import "./search.css";

function Search() {
  return (
    <BrewContext.Consumer>
      {({search, handleInputChange, handleFormSubmit}) => (
        <div>
          {/* <ul className="brew-container">
              {brews.map(brewski => (
                <li className="brewsList" key={brewski.id}>
                  {brewski.name}: <a 
                    href={brewski.website_url} target="_blank nonreferrer">{brewski.website_url}</a>
                </li>
              ))}
            </ul> */}
        </div>
      )}
    <div>
      <div className="search-bar">
        <label>Search A City</label>
        <input type="search" id="brew-search" placeholder="Charlotte"/>
        <button id="brewBtn">Search</button>
      </div>
    </div>
    </BrewContext.Consumer>
  )
}

export default Search;
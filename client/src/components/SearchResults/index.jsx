import React from "react";
import BrewContext from "../../utils/BrewContext";

function searchResults() {
  return (
     <BrewContext.Consumer>
      {({results: {name, website_url, phone}}) => (
        <div>
          <h2>Breweries in Your City</h2>
          <ul className="brew-container">
              <li className="brewsList">
                {name}, Phone: {phone}<a 
                  href={website_url} target="_blank nonreferrer">{website_url}</a>
              </li>
            </ul>
        </div>
      )}
    </BrewContext.Consumer>
  );
}

export default searchResults;
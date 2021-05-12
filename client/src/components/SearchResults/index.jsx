import React from "react";
import BrewContext from "../../utils/BrewContext";

function searchResults() {
  return (
    <BrewContext.Consumer>
      {({ result, search }) => (
      <>
        <h2>Breweries in {search.toUpperCase(search)}</h2>
        <ul className="brew-container">
          {result.map(brewski => {
            return (
              <li key={brewski.id} className="brewsList">
              {brewski.name}:
                {/* <a 
                  href={website_url} 
                  target="_blank nonreferrer"
                  className="Link"
                >
                  {website_url}
                </a> */}
            </li>
            )
          })}
        </ul>
      </>
      )}
    </BrewContext.Consumer>
  )
}

export default searchResults;
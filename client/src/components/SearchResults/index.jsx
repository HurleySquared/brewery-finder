import React from "react";
import BrewContext from "../../utils/BrewContext";

function searchResults(props) {

  const formatPhoneNumber = (phoneString) => {
    var cleaned = ('' + phoneString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
  };

  return (
    <BrewContext.Consumer>
      {({ result }) => (
      <>
        <h2>Breweries in {props.heading}</h2>
        <ul className="brew-container">
          {result.map(brewski => {
            return (
              <li key={brewski.id} className="brewsList">
                <p>{brewski.name} : <a 
                    href="tel:555-555-5555"
                    >
                      {formatPhoneNumber(brewski.phone)}
                    </a>
                </p>
                <a 
                  href={brewski.website_url} 
                  target="_blank nonreferrer"
                  className="Link"
                >
                  {brewski.website_url}
                </a>
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
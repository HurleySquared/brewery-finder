import React from "react";
import BrewContext from "../../utils/BrewContext";
import "./results.css"

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
        <h3>Breweries in {props.heading}</h3>
        <div className="results-container">
          <ul className="brew-container">
            {result.map(brewski => {
              return (
                <li key={brewski.id} className="brewsList">
                  <div className="brewHead">
                    <h4>{brewski.name}</h4>
                    <a href="tel:555-555-5555">
                      {formatPhoneNumber(brewski.phone)}
                    </a>
                    <br/>
                    <a
                      href={brewski.website_url}
                      target="_blank nonreferrer"
                      className="Link"
                    >
                      {brewski.website_url}
                    </a>
                  </div>
                    <address className="address">
                      {brewski.street} {brewski.city}, {brewski.state} {brewski.postal_code}
                    </address>
                </li>
              )
            })}
          </ul>
        </div>
        </>
      )}
    </BrewContext.Consumer>
  )
}

export default searchResults;
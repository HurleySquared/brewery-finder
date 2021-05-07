import {useState, useEffect} from "react";
import "./search.css";

function Search() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [brews, setBrews] = useState([]);

  useEffect(() => {
    // set up query to search by city or state
    fetch('https://api.openbrewerydb.org/breweries?by_city=charlotte')
    .then(res => res.json())
    .then((result) => {
      setIsLoaded(true);
      setBrews(result);
    },
    (error) => {
      setIsLoaded(true);
      setError(error);
    }
    )
  }, [])
  // if error in API or code throw error with message
  // clean up if else conditional
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
  return (
    <div>
      <div className="search-bar">
        <label>Search A City</label>
        <input type="search" id="brew-search" placeholder="Charlotte"/>
        <button id="brewBtn">Search</button>
      </div>
      <ul className="brew-container">
          {brews.map(brewski => (
            <li className="brewsList" key={brewski.id}>
              {brewski.name}: <a 
                target="_blank nonreferrer" href={brewski.website_url}>{brewski.website_url}</a>
            </li>
          ))}
        </ul>
    </div>
  )};
}

export default Search;
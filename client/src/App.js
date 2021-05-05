import { useEffect, useState } from "react";
// import * as API from "./utils/API";
import Header from "./components/Header/index";
import './index.css';

function App() {
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
        <Header />
        <ul>
          {brews.map(brewski => (
            <li className="brewsList" key={brewski.id}>
              {brewski.name}: {brewski.website_url}
            </li>
          ))}
        </ul>
      </div>
    );
  }

}

export default App;

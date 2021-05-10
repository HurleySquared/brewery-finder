import axios from "axios";

function brewSearch(query) {
  return axios.get(
    'https://api.openbrewerydb.org/breweries?by_city=' + query 
  );
}

export default brewSearch;
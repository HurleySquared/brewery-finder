import axios from "axios";

const BREWURL = "https://api.openbrewerydb.org/breweries?by_state=north_carolina";

function breweries() {
  return axios.get(BREWURL);
};

export default breweries;
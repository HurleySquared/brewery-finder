import axios from "axios";

export default {
  search: function (query) {
    return axios.get(
      'https://api.openbrewerydb.org/breweries?by_city=' + query
    )
  }
};
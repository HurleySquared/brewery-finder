import axios from "axios";

export default {
  search: function (query) {
    return axios.get(
      'https://api.openbrewerydb.org/breweries?per_page=25?by_city=' + query
    )
  }
};
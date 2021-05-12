import React from "react";

const BrewContext = React.createContext({
  results: {},
  search: "",
  result: [],
  handleInputChange: () => {},
  handleFormSubmit: () => {}
});

export default BrewContext;
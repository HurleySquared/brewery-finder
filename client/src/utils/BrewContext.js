import React from "react";

const BrewContext = React.createContext({
  results: {},
  search: "",
  handleInputChange: () => {},
  handleFormSubmit: () => {}
});

export default BrewContext;
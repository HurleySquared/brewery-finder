import React, { Component } from "react";
import Header from "../Header";
import BrewSearch from "../BrewSearch";
import SearchResults from "../SearchResults";
import API from "../../utils/API";
import BrewContext from "../../utils/BrewContext";

class BrewContainer extends Component {
  state = {
    results: {},
    search: "",
    result: []
  };

  componentDidMount() {
    this.searchBrews("charlotte");
  }

  searchBrews = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data}))
      .catch(err => console.log(err, "-------"));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBrews(this.state.search);
    console.log(this.state.search);
    console.log(this.state.result)
  };

  render() {
    return (
      <BrewContext.Provider
        value={{
          ...this.state,
          handleInputChange: this.handleInputChange,
          handleFormSubmit: this.handleFormSubmit
        }}
      >
        <Header />
        <BrewSearch />
        <SearchResults />
      </BrewContext.Provider>
    );
  }
}

export default BrewContainer;
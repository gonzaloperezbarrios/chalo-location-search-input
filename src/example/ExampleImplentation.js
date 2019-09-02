import React, { Component } from "react";
// Import package location-search-input
import LocationSearchInput from "chalo-location-search-input";

// Implementation example
class ExampleImplentation extends Component {
  // It's a method when response ok
  handleSuccess = response => {
    console.log("success: Direction valid", response);
  };

  // It's a method when response bad
  handleError = response => {
    console.log("error: Direction inavlid", response);
  };

  render() {
    return (
      <LocationSearchInput
        handleSuccess={this.handleSuccess}
        handleError={this.handleError}
      />
    );
  }
}

export default ExampleImplentation;

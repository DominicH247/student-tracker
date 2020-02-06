import React, { Component } from "react";

class CohortForm extends Component {
  state = {
    cohort: ""
  };

  handleChange = event => {
    const input = event.target.value;
    this.setState({ cohort: input });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.setCohortSearch(this.state.cohort);
  };

  render() {
    return (
      <form id="cohort" onSubmit={this.handleSubmit}>
        {console.log(this.state.cohort)}
        <label>
          Search Cohort:{" "}
          <input
            type="number"
            onChange={this.handleChange}
            value={this.state.cohort}
          />
        </label>
        <button>Search Cohort</button>
      </form>
    );
  }
}

export default CohortForm;

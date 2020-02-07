import React, { Component } from "react";
import * as api from "../utils/api";

class StudentAdder extends Component {
  state = {
    name: "",
    startingCohort: 1
  };

  componentDidMount() {}

  componentDidUpdate(prevProps) {}

  handleChange = ({ target: { id, value } }) => {
    this.setState({ [id]: value });
  };

  handleSubmit = submitEvent => {
    submitEvent.preventDefault();
    this.props.insertStudent(this.state);
  };

  render() {
    console.log(this.state);
    return (
      <div className="oneStudentContainer">
        ADDER IS HERE
        <form onSubmit={this.handleSubmit}>
          <button>Submit</button>
          <label>
            Student Name:
            <input id="name" type="text" onChange={this.handleChange} />
          </label>
          <label>
            Starting Cohort:
            <input
              id="startingCohort"
              type="number"
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default StudentAdder;

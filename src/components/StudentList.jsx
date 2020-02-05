import React, { Component } from "react";
import * as api from "../utils/api";
import Loading from "../components/Loading";
import StudentCard from "../components/StudentCard";

class StudentList extends Component {
  state = {
    students: [],
    graduated: null,
    block: null,
    isLoading: true
  };

  componentDidMount = () => {
    api.getStudents().then(({ students }) => {
      this.setState({ students, isLoading: false });
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.graduated !== this.state.graduated) {
      api
        .getStudents(this.state.graduated, this.state.block)
        .then(({ students }) => {
          this.setState({ students });
        });
    }
    if (prevState.block !== this.state.block) {
      api
        .getStudents(this.state.graduated, this.state.block)
        .then(({ students }) => {
          this.setState({ students });
        });
    }
  };

  handleChange = event => {
    console.log(event.target.value, "EVENT");
    let graduatedSelection;
    let blockSelection;

    if (event.target.id === "graduated-selection") {
      graduatedSelection = event.target.value;
      this.setState({ graduated: graduatedSelection, block: null });
    }

    if (event.target.id === "block-selection") {
      blockSelection = event.target.value;
      if (blockSelection === "grad") {
        this.setState({ graduated: true, block: blockSelection });
      } else if (blockSelection === "") {
        this.setState({ graduated: null, block: blockSelection });
      } else {
        this.setState({ graduated: false, block: blockSelection });
      }
    }
  };

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }
    return (
      <main>
        {/* Consider putting into new component */}
        {console.log(this.state, "THE STATE")}
        <h3>There are currently {this.state.students.length} students</h3>
        <form>
          <label>
            Filter by:{" "}
            {this.state.block && this.state.block !== "grad" ? (
              <select id="graduated-selection" onChange={this.handleChange}>
                <option value={false}>Not graduated</option>
              </select>
            ) : this.state.block === "grad" ? (
              <select id="graduated-selection" onChange={this.handleChange}>
                <option value={true}>Graduated</option>
              </select>
            ) : (
              <select id="graduated-selection" onChange={this.handleChange}>
                <option value={null}>All</option>
                <option value={true}>Graduated</option>
                <option value={false}>Not graduated</option>
              </select>
            )}
            {this.state.graduated === "true" ? (
              <select id="block-selection" onChange={this.handleChange}>
                <option value="grad">Graduated</option>
              </select>
            ) : (
              <select id="block-selection" onChange={this.handleChange}>
                <option value="">All</option>
                <option value="fun">Fundamentals</option>
                <option value="be">Backend</option>
                <option value="fe">Frontend</option>
                <option value="proj">Project</option>
                <option value="grad">Graduated</option>
              </select>
            )}
          </label>
        </form>
        {this.state.students.map(student => {
          return <StudentCard key={student._id} {...student} />;
        })}
      </main>
    );
  }
}

export default StudentList;

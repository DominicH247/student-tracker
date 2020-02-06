import React, { Component } from "react";
import * as api from "../utils/api";

class Student extends Component {
  state = {
    student: { blockHistory: [] }
  };

  componentDidMount() {
    api.getStudentById(this.props.student_id).then(student => {
      this.setState({ student });
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.student_id !== this.props.student_id) {
      api.getStudentById(this.props.student_id).then(student => {
        this.setState({ student });
      });
    }
  }

  render() {
    console.log(this.state.student, "HERE");
    return (
      <div className="oneStudentContainer">
        <h2>Student: {this.state.student.name}</h2>
        <h2>Student Id: {this.state.student._id}</h2>
        <h3>Starting Cohort: {this.state.student.startingCohort}</h3>
        <ul>
          {this.state.student.blockHistory.map((block, index) => {
            return (
              <li key={index}>
                Block: {block.number} - {block.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Student;

import React, { Component } from "react";
import * as api from "../utils/api";
import Loading from "../components/Loading";
import StudentCard from "../components/StudentCard";
import CohortForm from "../components/CohortForm";
import { Router, Link } from "@reach/router";
import Student from "../components/Student";

class StudentList extends Component {
  state = {
    students: [],
    graduated: null,
    block: null,
    cohortSearch: null,
    sortBy: "name",
    orderBy: "asc",
    isLoading: true
  };

  componentDidMount = () => {
    api
      .getStudents(this.state.sortBy, this.state.orderBy, this.state.graduated)
      .then(({ students }) => {
        this.setState({ students, isLoading: false });
      });
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("HERE");
    for (let key in prevState) {
      if (key !== "students") {
        if (prevState[key] !== this.state[key]) {
          api
            .getStudents(
              // {...this.state}
              this.state.sortBy,
              this.state.orderBy,
              this.state.graduated,
              this.state.block,
              this.state.cohortSearch
            )
            .then(({ students }) => {
              this.setState({ students });
            });
        }
      }
    }
  };

  handleChange = ({ target: { value, id } }) => {
    console.log(id);
    this.setState({ [id]: value });
  };

  setCohortSearch = cohortInput => {
    this.setState({ cohortSearch: cohortInput });
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
              <select id="graduated" onChange={this.handleChange}>
                <option value={false}>Not graduated</option>
              </select>
            ) : this.state.block === "grad" ? (
              <select id="graduated" onChange={this.handleChange}>
                <option value={true}>Graduated</option>
              </select>
            ) : (
              <select id="graduated" onChange={this.handleChange}>
                <option value="null">All</option>
                <option value="true">Graduated</option>
                <option value="false">Not graduated</option>
              </select>
            )}
            {this.state.graduated === "true" ? (
              <select id="block" onChange={this.handleChange}>
                <option value="grad">Graduated</option>
              </select>
            ) : (
              <select id="block" onChange={this.handleChange}>
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

        <CohortForm setCohortSearch={this.setCohortSearch} />

        <form>
          <select id="sortBy" onChange={this.handleChange}>
            <option value="name">Name</option>
            <option value="startingCohort">Starting cohort</option>
          </select>
          <select id="orderBy" onChange={this.handleChange}>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </select>
        </form>

        <Router>
          <Student path="/student/:student_id" />
        </Router>

        {this.state.students.map(student => {
          return (
            <Link to={`/students/student/${student._id}`} key={student._id}>
              <StudentCard {...student} />;
            </Link>
          );
        })}

        {!this.state.students.length && <h1>Filter has no students!</h1>}
      </main>
    );
  }
}

export default StudentList;

import React, { Component } from "react";
import * as api from "../utils/api";

class CourseMetrics extends Component {
  state = {
    studentData: []
  };

  componentDidMount() {
    api.getAllStudentsBlockInfo().then(studentsData => {
      Promise.all(studentsData).then(response => {
        let blockHistorys = response.map(item => {
          return item.blockHistory;
        });
        let pathsArray = blockHistorys.map(array => {
          let path = array.map(obj => {
            return obj.number;
          });
          return path;
        });
        console.log(pathsArray);
        //compare how many unique arrays are in the paths array.
        const uniqueArrays = new Set(pathsArray);

        console.log(uniqueArrays);
      });
    });
  }

  render() {
    return (
      <div>
        <h1>METRICS</h1>
      </div>
    );
  }
}

export default CourseMetrics;

import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import * as api from "../utils/api";
import * as utils from "../utils/utils";

class CourseMetrics extends Component {
  state = {
    pathData: {}
  };

  componentDidMount() {
    api.getAllStudentsBlockInfo().then(studentsData => {
      Promise.all(studentsData).then(response => {
        let blockHistorys = response.map(item => {
          return item.blockHistory;
        });
        let pathsArray = blockHistorys.map(array => {
          let path = array.map(obj => {
            console.log(obj);
            return obj.name;
          });
          return path;
        });
        let uniquePaths = utils.uniqueArrays(pathsArray);
        this.setState({ pathData: uniquePaths });
      });
    });
  }

  render() {
    const data = {
      labels: Object.keys(this.state.pathData),
      datasets: [
        {
          data: Object.values(this.state.pathData),
          backgroundColor: [
            "#C6E945",
            "#FFC300 ",
            "#FF5733 ",
            "#C70039 ",
            "#900C3F",
            "#581845 ",
            "#45B5E9 ",
            "#0C171C",
            "#C066C9 "
          ]
        }
      ]
    };
    const legend = {
      display: true,
      position: "bottom",
      align: "start",
      labels: {
        fontSize: 20
      }
    };
    const options = {
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      }
    };
    console.log(this.state);
    return (
      <section className="metricsPage">
        <div className="chartContainer">
          <h1>METRICS</h1>
          <Doughnut id="dough" data={data} legend={legend} options={options} />
        </div>
      </section>
    );
  }
}

export default CourseMetrics;

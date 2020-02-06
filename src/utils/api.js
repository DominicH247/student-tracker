const Axios = require("axios");

const getStudents = (
  sortByInput,
  orderByInput,
  hasGraduated,
  blockInput,
  cohortInput
) => {
  // console.log(sortByInput, orderByInput, hasGraduated, blockInput, cohortInput);
  let searchPath = `https://nc-student-tracker.herokuapp.com/api/students?sort_by=${sortByInput}&order=${orderByInput}&graduated=${hasGraduated}`;

  if (blockInput) {
    searchPath += `&block=${blockInput}`;
  }

  if (cohortInput) {
    searchPath += `&cohort=${cohortInput}`;
  }

  return Axios.get(searchPath).then(({ data }) => {
    console.log(data, "THE DATA ");
    return data;
  });
};

module.exports = { getStudents };

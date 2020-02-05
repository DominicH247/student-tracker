const Axios = require("axios");

const getStudents = (hasGraduated, blockInput) => {
  let blockQuery = blockInput;
  if (!blockInput) {
    blockQuery = "";
  }
  console.log(
    `https://nc-student-tracker.herokuapp.com/api/students?graduated=${hasGraduated}&block=${blockQuery}`
  );
  return Axios.get(
    `https://nc-student-tracker.herokuapp.com/api/students?graduated=${hasGraduated}&block=${blockQuery}`
  ).then(({ data }) => {
    console.log(data, "THE DATA ");
    return data;
  });
};

module.exports = { getStudents };

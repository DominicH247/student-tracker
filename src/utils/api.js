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
    // console.log(data, "THE DATA ");
    return data;
  });
};

const getStudentById = id => {
  return Axios.get(
    `https://nc-student-tracker.herokuapp.com/api/students/${id}`
  ).then(({ data: { student } }) => {
    return student;
  });
};

const getAllStudentsBlockInfo = () => {
  let searchPath = `https://nc-student-tracker.herokuapp.com/api/students?graduated=true`;
  return Axios.get(searchPath)
    .then(({ data: { students } }) => {
      return students;
    })
    .then(students => {
      // console.log(students);
      let studentsData = students.map(student => {
        return getStudentById(student._id);
      });
      return studentsData;
    });
};

const postNewStudent = student => {
  return Axios.post(
    `https://nc-student-tracker.herokuapp.com/api/students`,
    student
  ).then(({ data }) => {
    return data.student;
  });
};

module.exports = {
  getStudents,
  getStudentById,
  getAllStudentsBlockInfo,
  postNewStudent
};

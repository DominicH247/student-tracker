import React from "react";

const StudentCard = ({ _id, name, startingCohort, currentBlock }) => {
  return (
    <section className="student-card-container">
      <p>Student id: {_id}</p>
      <p>{name}</p>
      <p>starting cohort:{startingCohort}</p>
      <p>current block: {currentBlock}</p>
    </section>
  );
};

export default StudentCard;

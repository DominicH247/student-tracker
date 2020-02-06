import React from "react";

const StudentCard = ({ _id, name, startingCohort, currentBlock }) => {
  return (
    <section className="studentCard">
      {/* <p className="studentP">Student id: {_id}</p> */}
      <p className="studentP">{name}</p>
      <p className="studentP">starting cohort:{startingCohort}</p>
      <p className="studentP">current block: {currentBlock}</p>
    </section>
  );
};

export default StudentCard;

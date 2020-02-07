import React from "react";

const StudentCard = (props, { _id, name, startingCohort, currentBlock }) => {
  const onClick = event => {
    event.preventDefault();
    props.deleteStudent(_id);
  };

  return (
    <section className="studentCard">
      {/* <p className="studentP">Student id: {_id}</p> */}
      <p className="studentP">{name}</p>
      <p className="studentP">starting cohort:{startingCohort}</p>
      <p className="studentP">current block: {currentBlock}</p>
      <button onClick={onClick}>DELETE THIS STUDENT</button>
    </section>
  );
};

export default StudentCard;

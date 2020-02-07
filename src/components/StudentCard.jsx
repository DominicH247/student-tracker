import React from "react";

const StudentCard = props => {
  const onClick = event => {
    event.preventDefault();
    props.deleteStudent(props.student._id);
  };

  return (
    <section className="studentCard">
      {/* <p className="studentP">Student id: {_id}</p> */}
      <p className="studentP">{props.student.name}</p>
      <p className="studentP">starting cohort:{props.student.startingCohort}</p>
      <p className="studentP">current block: {props.student.currentBlock}</p>
      <button onClick={onClick}>DELETE THIS STUDENT</button>
    </section>
  );
};

export default StudentCard;

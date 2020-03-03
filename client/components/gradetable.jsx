import React from 'react';

export default function GradeTable(props) {
  if (!props) {
    return (
      <h3>No grades recorded</h3>
    );
  } else {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    );

  }

}

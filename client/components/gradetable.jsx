import React from 'react';
import Grade from './grade';

export default function GradeTable(props) {
  if (!props) {
    return (
      <h3>No grades recorded</h3>
    );
  } else {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
          </tr>
        </thead>
        <tbody>
          {
            props.grades.map(el => {
              return <Grade
                key={el.id}
                grade={el}
              />;
            })
          }

        </tbody>
      </table>
    );

  }

}

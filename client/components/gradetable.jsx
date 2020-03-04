import React from 'react';
import Grade from './grade';

export default function GradeTable(props) {
  if (!props) {
    return (
      <h3>No grades recorded</h3>
    );
  } else {
    return (
      <div className="col-8">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Student Name</th>
              <th scope="col">Course</th>
              <th scope="col">Grade</th>
              <th scope="col">Operation</th>
            </tr>
          </thead>
          <tbody>
            {
              props.grades.map(el => {
                return <Grade
                  key={el.id}
                  grade={el}
                  deleteGrade={props.deleteGrade}
                />;
              })
            }

          </tbody>
        </table>
      </div>

    );

  }

}

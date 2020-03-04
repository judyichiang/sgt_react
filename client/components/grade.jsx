import React from 'react';

export default function Grade(props) {
  const studentGrade = props.grade;

  return (
    <tr>
      <th scope="col">{studentGrade.name}</th>
      <th scope="col">{studentGrade.course}</th>
      <th scope="col">{studentGrade.grade}</th>
      <th scope="col"><button type="button" className="btn btn-danger">Delete</button></th>
    </tr>
  );

}

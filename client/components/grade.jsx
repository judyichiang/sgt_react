import React from 'react';

export default function Grade(props) {
  const studentGrade = props.grade;

  return (
    <tr>
      <th scope="col">{studentGrade.name}</th>
      <th scope="col">{studentGrade.course}</th>
      <th scope="col">{studentGrade.grade}</th>
    </tr>
  );

}

import React from 'react';

export default function Header(props) {
  return (
    <div className="row">
      <h1 className="col-md h1-center text-md-left">{props.text}</h1>
      <h3 className="col mt-2 h3-center text-md-right">{props.text2}
        <span className=" badge badge-secondary">{isNaN(props.average) ? 'N/A' : props.average}</span>
      </h3>

    </div>
  );
}

import React from 'react';

export default function Header(props) {
  return (
    <div>
      <h1>{props.text}</h1>
      <h3>Average Grade
        <span className=" badge badge-secondary"></span>
      </h3>

    </div>
  );
}

/* <div class="row header-col">
  <h1 class="col-md h1-center text-md-left">{props.text}</h1>
  <h3 class="col mt-2 h3-center text-md-right">Average Grade
        <span class=" badge badge-secondary"></span>
  </h3>

</div> */

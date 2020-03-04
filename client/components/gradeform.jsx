/* eslint-disable no-console */
import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleGradeChange = this.handleCourseChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handdleCancel = this.handleCancelChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleCourseChange(event) { }

  handleGradeChange(event) { }

  handleSubmit(event) {
    event.preventDefault();

  }

  handleCancel(event) {}

  render() {
    return (
      <div className="col-md">
        <form onSubmit={this.handleSubmit}>

          <div className="form-group input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-user"></i>
            </span>
            <input type="text" name="name" className="form-control" aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm" placeholder="Name" value={this.state.name} />
          </div>

          <div className="form-group input-group-prepend">
            <span className="input-group-text">
              <i className="far fa-list-alt"></i>
            </span>
            <input type="text" name="course" className="form-control" aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm" placeholder="Course" value={this.state.course} />
          </div>

          <div className="form-group input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-graduation-cap"></i>
            </span>

            <input type="text" name="grade" className="form-control" aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm" placeholder="Student Grade" value={this.state.grade} />
          </div>
          <button type="reset" className="btn btn-outline-dark ml-2 float-md-right">Cancel</button>
          <button type="submit" className="btn btn-success float-md-right" value="Submit">Add</button>
        </form>
      </div>
    );
  }

}

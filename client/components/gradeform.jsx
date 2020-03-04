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
    this.handleGradeChange = this.handleGradeChange.bind(this);

    this.handleAdd = this.handleAdd.bind(this);

  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleCourseChange(event) {
    this.setState({
      course: event.target.value
    });
  }

  handleGradeChange(event) {
    this.setState({
      grade: event.target.value
    });
  }

  handleAdd(event) {
    event.preventDefault();

  }

  render() {
    return (
      <div className="col-md">
        <form onSubmit={this.handleAdd}>

          <div className="form-group input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-user"></i>
            </span>
            <input type="text" name="name" className="form-control" aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm" placeholder="Name" value={this.state.value} onChange={this.handleNameChange}/>
          </div>

          <div className="form-group input-group-prepend">
            <span className="input-group-text">
              <i className="far fa-list-alt"></i>
            </span>
            <input type="text" name="course" className="form-control" aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm" placeholder="Course" value={this.state.value} onChange={this.handleCourseChange}/>
          </div>

          <div className="form-group input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-graduation-cap"></i>
            </span>

            <input type="text" name="grade" className="form-control" aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm" placeholder="Student Grade" value={this.state.value} onChange={this.handleGradeChange}/>
          </div>
          <button type="reset" className="btn btn-outline-dark ml-2 float-md-right">Cancel</button>
          <button type="submit" className="btn btn-success float-md-right" value="Submit">Add</button>
        </form>
      </div>
    );
  }

}

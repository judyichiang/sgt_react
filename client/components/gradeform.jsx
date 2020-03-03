/* eslint-disable no-console */
import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit: ', this.state.value);

    const newGrade = {
      value: this.state.value
    };
    this.props.onSubmit(newGrade);
    this.setState({ value: '' });
  }

  render() {
    return (
      <div className="col-md">
        <form onSubmit={this.handleSubmit}>

          <div className="form-group input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-user"></i>
            </span>
            <input type="text" name="name" className="form-control" aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm" placeholder="Name"/>
          </div>

          <div className="form-group input-group-prepend">
            <span className="input-group-text">
              <i className="far fa-list-alt"></i>
            </span>
            <input type="text" name="course" className="form-control" aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm" placeholder="Course"/>
          </div>

          <div className="form-group input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-graduation-cap"></i>
            </span>

            <input type="text" name="grade" className="form-control" aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm" placeholder="Student Grade"/>
          </div>
          <button type="reset" className="btn btn-outline-dark ml-2 float-md-right">Cancel</button>
          <button type="submit" className="btn btn-success float-md-right">Add</button>
        </form>
      </div>
    );
  }

}

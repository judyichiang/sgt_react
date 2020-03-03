/* eslint-disable no-console */
import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newEntry: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({
      newEntry: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newGrade = {
      newEntry: this.state.newEntry
    };
    this.props.onSubmit(newGrade);
    this.setState({ newEntry: '' });
  }

  render() {
    return (
      <div className="col-md">
        <form>

        </form>

      </div>
    );
  }

}

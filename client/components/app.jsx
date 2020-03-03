/* eslint-disable no-console */
import React from 'react';
import Header from './header';
import GradeTable from './gradetable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };

  }

  componentDidMount() {
    this.getGrades();
  }

  getGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => {
        this.setState({
          grades: data
        });
        console.log(this.state.grades);
        const num = this.state.grades.length;
        console.log(num);
        let total = 0;
        for (let i = 0; i < num; i++) {
          total += this.state.grades[i].grade;
        }
        console.log(total);
        const avg = total / num;
        console.log(avg);
      })
      .catch(err => { console.error('Error: ', err); });
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <Header text="Student Grade Table" />
          <GradeTable grades={this.state.grades} />
        </div>

      </div>

    );
  }
}

export default App;

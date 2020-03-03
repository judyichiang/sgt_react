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
      })
      .catch(err => { console.error('Error: ', err); });
  }

  getAverage() {
    const num = this.state.grades.length;
    let total = 0;
    for (let i = 0; i < num; i++) {
      total += this.state.grades[i].grade;
    }
    return total / num;
  }

  render() {
    this.getAverage();
    return (
      <div className="container">
        <Header text="Student Grade Table" text2="Average Grade " average={this.getAverage()}/>
        <GradeTable grades={this.state.grades}/>
      </div>

    );
  }
}

export default App;

import React from 'react';
import Header from './header';
import GradeTable from './gradetable';
import GradeForm from './gradeform';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };

    this.addGrade = this.addGrade.bind(this);
    this.banished = this.banished.bind(this);
  }

  componentDidMount() {
    this.getGrades();
  }

  getGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades => {
        this.setState({
          grades
        });
      })
      .catch(err => { console.error('Error: ', err); });
  }

  addGrade(newStudent) {
    fetch('/api/grades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newStudent)
    })
      .then(res => res.json())
      .then(newStudent => {
        this.setState({
          grades: this.state.grades.concat(newStudent)
        });
      })
      .catch(err => { console.error('Error: ', err); });
  }

  getAverage() {
    const num = this.state.grades.length;
    let total = 0;
    for (let i = 0; i < num; i++) {
      total += Number(this.state.grades[i].grade);
    }
    var average = total / num;
    return average.toFixed(2);
  }

  banished(deleteGrade) {
    fetch(`/api/grades/${deleteGrade}`, { method: 'DELETE' })
      .then(deleteGrade => {
        this.setState({
          grades: this.state.grades.filter(el => el.id !== deleteGrade)
        });
      })
      .catch(err => { console.error('Error: ', err); });
    this.getGrades();
  }

  render() {
    this.getAverage();

    return (
      <div className="container">
        <Header text="Student Grade Table" text2="Average Grade " average={this.getAverage()} />
        <div className="row">
          <GradeTable grades={this.state.grades} deleteGrade={this.banished} />
          <GradeForm onSubmit={this.addGrade} />
        </div>

      </div>

    );
  }
}

export default App;

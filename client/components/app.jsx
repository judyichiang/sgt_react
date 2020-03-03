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

  getAverageGrade() {

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

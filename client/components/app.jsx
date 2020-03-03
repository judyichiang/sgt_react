/* eslint-disable no-console */
import React from 'react';
import Header from './header';
// import Grade from './grade'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };

  }

  componentDidMount() {
    this.getGrades();
    console.log('componentDidMount');
    console.log(this.state.grades);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    console.log(this.state.grades);
  }

  getGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => {
        this.setState({
          grades: data
        });
      })
      .catch(err => { console.log('Error: ', err); });
  }

  render() {

    return (
      <div className="container">
        <Header text="Student Grade Table" />
      </div>

    );
  }
}

export default App;

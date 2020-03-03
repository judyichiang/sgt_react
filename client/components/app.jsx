/* eslint-disable no-console */
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };

  }

  componentDidMount() {
    this.getGrades();
    console.log('hey');
    console.log(this.state.grades);
  }

  componentDidUpdate() {
    console.log('yo');
    console.log(this.state.grades);
  }

  getGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => {
        this.setState({
          grades: data
        });
        // console.log(this.state.grades)
      })
      .catch(err => { console.log('Error: ', err); });
  }

  render() {

    function Header(props) {
      return <h1>Student Grade Table</h1>;
    }

    return (
      Header()
    );
  }
}

export default App;

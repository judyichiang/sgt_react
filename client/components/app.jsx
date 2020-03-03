import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };

  }

  componentDidUpdate() {
    this.getGrades();
  }

  getGrades() {

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

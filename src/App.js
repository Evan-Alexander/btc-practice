import React, { Component } from 'react';
import DonorList from './DonorList';
import StyledComponents from './StyledComponents';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Donors List</h1>
        <DonorList
          individuals={this.props.individuals}
          businesses={this.props.businesses}
        />
        <StyledComponents />
      </div>
    );
  }
}

export default App;

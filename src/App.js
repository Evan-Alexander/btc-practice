import React, { Component } from 'react';
import DonorList from './DonorList';
import Search from './Search';
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
      </div>
    );
  }
}

export default App;

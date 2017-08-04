import React from 'react';

class Individuals extends React.Component {
  render() {
    return(
      <li>{this.props.individual.contributor_payee} {" - $"}{this.props.individual.sum}</li>
    )
  }
}

export default Individuals;

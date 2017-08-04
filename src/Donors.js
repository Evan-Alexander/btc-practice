import React from 'react';

class Donors extends React.Component {
  render() {
    return(
      <ul>
        {
          this.props.list.map((thing, index) => {
            return <li key={index}>{thing.contributor_payee} {" - $"}{thing.sum}</li>
          })
        }
      </ul>


    )
  }
}

export default Donors;

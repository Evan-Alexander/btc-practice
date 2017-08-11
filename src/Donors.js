import React from 'react';
// "LIST" IS THE VARIABLE ASSIGNED TO ALL DATA
// MAP OVER IT, CALLING EACH ITEM "THING" AND PASS IN INDEX
// RETURN EACH LIST ITEM WITH A KEY OF "INDEX"
// AND CONTRIBUTOR NAME AND AMOUNT
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

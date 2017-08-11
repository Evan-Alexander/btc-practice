import React from 'react';
import Donors from './Donors';
class DonorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      business: [],
      individual: [],
      isChecked: false
    };
    this.handleCheckBox = this.handleCheckBox.bind(this);
  }
  // API CALL
  componentDidMount() {
     fetch('http://54.213.83.132/hackoregon/http/oregon_business_contributors/5/').then(response => {
      return response.json();
    }).then(businessData => {
      // console.log(businessData);
      this.setState({
        business: businessData
      })
    })
    fetch('http://54.213.83.132/hackoregon/http/oregon_individual_contributors/5/').then(response => {
     return response.json();
   }).then(individualData => {
    //  console.log(individualData);
     this.setState({
       individual: individualData
     })
   })
  }
  // END API CALL
  // let sortedContent = this.state.isChecked ?
  // <div>STUFF!</div> : null;
  //TOGGLE CHECKBOX TRUE VS. FALSE
  handleCheckBox() {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  render() {

    let sums = this.state.individual.map((thing, index) => {
      return thing.sum;
    });
    let compareSums = sums.sort(function(a, b) {
      return a - b;
    });
    compareSums = compareSums.join(", ");
    console.log(compareSums.toString())



    return(
      <div>
        <h3>Businesses</h3>

          <Donors list={this.state.business}/>

        <h3>Individuals</h3>
          {compareSums}
          <Donors list={this.state.individual} />
          <form>
            <p>
              <input
                type="checkbox"
                onChange ={this.handleCheckBox}
              />
                {' '}
                Sort by ascending contributors
            </p>
          </form>
      </div>

    )
  }
}

export default DonorList;

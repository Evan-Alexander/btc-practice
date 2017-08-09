import React from 'react';
import Donors from './Donors';
import Search from './Search';
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
  componentDidMount() {
     fetch('http://54.213.83.132/hackoregon/http/oregon_business_contributors/5/').then(response => {
      return response.json();
    }).then(jsonData => {
      console.log(jsonData);
      this.setState({
        business: jsonData
      })
    })
    fetch('http://54.213.83.132/hackoregon/http/oregon_individual_contributors/5/').then(response => {
     return response.json();
   }).then(individualData => {
     console.log(individualData);
     this.setState({
       individual: individualData
     })
   })
  }
  handleCheckBox() {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }
  render() {
    return(
      <div>
        <h3>Businesses</h3>

          <Donors list={this.state.business}/>

        <h3>Individuals</h3>

          <Donors list={this.state.individual} />
          <Search
            isChecked={this.state.isChecked}
            onChange={this.handleCheckBox}/>
      </div>

    )
  }
}

export default DonorList;

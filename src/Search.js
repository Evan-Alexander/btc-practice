import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      checkboxState: false
    }
    this.handleSortChange = this.handleSortChange.bind(this);
  }
  handleSortChange(e) {
    this.props.onSortChange(e.target.checked);
  }
  render() {
    return(
      <form>
        <p>
          <input
            type="checkbox"
            checked={this.props.sortByAscending}
            onChange ={this.handleSortChange}
          />
            {' '}
            Sort by ascending contributors
        </p>
      </form>
    )
  }
}
export default Search;

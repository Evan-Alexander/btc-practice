import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(e) {
    this.props.onChange(e.target.checked);
  }

  render() {
    return(
      <div>
        <form>
          <p>
            <input
              type="checkbox"
              onChange ={this.handleOnChange}
            />
              {' '}
              Sort by ascending contributors
          </p>
        </form>
      </div>
    )
  }
}
export default Search;

import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div className="search-bar">
        <input          
          value={this.state.term}
          placeholder='Find a video instantly'
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    if (term !== "") {
      this.setState({ term });
      this.props.onSearchTermChange(term);
    } else {
      this.setState({ term });
      this.props.onSearchTermChange("something just like this");
    }
  }
}

export default SearchBar;

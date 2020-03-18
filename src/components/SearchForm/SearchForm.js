import React, {Component} from 'react';
import './SearchForm.css';

// SEARCHFORM COMPONENT CODE GOES HERE

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  updateState = (event) => {
    this.setState({input: event.target.value})
  }

  render() {
    return (
      <form>
        <input 
          type="text" 
          placeholder="Search for news article here"
          value={this.state.input}
          onChange={this.updateState}
        >
        </input>

        <button
          type="button"
          onClick={() => this.props.searchArticles(this.state.input)}
        >Search
        </button>
      </form>
    )
  }
}

export default SearchForm;
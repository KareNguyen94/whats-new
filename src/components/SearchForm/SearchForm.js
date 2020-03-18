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

 

  render() {
    return (
      <form>
        <input 
          type="text" 
          placeholder="Search for news article here"
          value={this.state.input}
        >
        </input>

        <button
          type="button"

        >Search
        </button>
      </form>
    )
  }
}

export default SearchForm;
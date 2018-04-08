import React, { Component } from 'react';
import { connect } from 'react-redux';


class IdeaSearchBar extends Component {
  render(){
    return (
      <div>
      <label htmlFor="category">Search Ideas By Category:</label>
        <select name="category_id" value={category_id} onChange={this.handleOnChange}>
          <option></option>
          <option value="1">Social</option>
          <option value="2">Digital</option>
          <option value="3">Partnerships</option>
          <option value="4">On-Air</option>
          <option value="5">On-Ground</option>
        </select>
      </div>
    )
  }
}

export default IdeaSearchBar;

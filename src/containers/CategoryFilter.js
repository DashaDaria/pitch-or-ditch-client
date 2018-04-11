import React, { Component } from 'react';
import './Ideas.css';

const IdeaSearchBar = ({idea, filterIdea}) =>
  <div>
  <input
    <select select name="category_id" value={category_id} onChange={this.handleOnChange} >
      <option></option>
      <option value="1">Social</option>
      <option value="2">Digital</option>
      <option value="3">Partnerships</option>
      <option value="4">On-Air</option>
      <option value="5">On-Ground</option>
    </select>
  </input>

    <button
      type="button"
      onClick={() => filterIdea(category_id)}>
      Filter
    </button>
  </div>


 export default IdeaSearchBar;

import React, { Component } from 'react';


class IdeaSearchBar extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    console.log(name)

  }


  render(){
    return (
      <div>
      <form >
        <div>
        <label htmlFor="category">Search Ideas By Category:</label>
          <select name="category_id" >
            <option></option>
            <option value="1">Social</option>
            <option value="2">Digital</option>
            <option value="3">Partnerships</option>
            <option value="4">On-Air</option>
            <option value="5">On-Ground</option>
          </select>
        </div>
        <button type="submit">Filter</button>
        </form>
      </div>
    )
  }
}


 export default IdeaSearchBar;
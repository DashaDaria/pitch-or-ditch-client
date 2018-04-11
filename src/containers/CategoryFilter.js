import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCategoryFilter } from '../actions/categoryFilter';

class CategoryFilter extends Component {

    handleOnChange = event => {
      const { name, value } = event.target;
      const currentIdeaView = Object.assign({}, this.props.categoryFilter, {
        [name]: value

      })
      this.props.addCategoryFilter(currentIdeaView)
    }


  render() {
    const { category_id } = this.props.categoryFilter;
    return (
      <div >
        <h3>Filter by category: </h3>
        <div >
          <input type="checkbox" name={category_id} value="" onClick={this.handleCategoryFilter}/><span>All </span>
          <input type="checkbox" name={category_id} value="1" onClick={this.handleCategoryFilter}/><span>Social </span>
          <input type="checkbox" name={category_id} value="2" onClick={this.handleCategoryFilter}/><span>Digital </span>
          <input type="checkbox" name={category_id} value="3" onClick={this.handleCategoryFilter}/><span>Partnerships </span>
          <input type="checkbox" name={category_id} value="4" onClick={this.handleCategoryFilter}/><span>On-Air </span>
          <input type="checkbox" name={category_id} value="5" onClick={this.handleCategoryFilter}/><span>On-Ground </span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    categoryFilter: state.categoryFilter
  }
}

export default connect(mapStateToProps, { addCategoryFilter })(CategoryFilter);

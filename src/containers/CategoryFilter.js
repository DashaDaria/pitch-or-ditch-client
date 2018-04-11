import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCategoryFilter, removeCategoryFilter } from '../actions/categoryFilter';

class CategoryFilter extends Component {

  handleCategoryFilter(event) {
    let categoryId = event.target.value
    if (event.target.checked) {
      this.props.dipatch(addCategoryFilter(categoryId));
    } else {
        this.props.dispatch(removeCategoryFilter(categoryId));
      }
    }
  }

  render() {
    return (
      <div className='filter-container'>
        <h3>Filter by category: </h3>
        <div className='filter'>
          <input type="checkbox" value="" onClick={(event) => this.handleCategoryFilter(event)}/>All<br />
        </div>
      </div>
    )
  }


const mapStateToProps = state => {
  return {
    categoryFilter: state.categoryFilter
  }
}

export default connect(mapStateToProps, { addCategoryFilter, removeCategoryFilter })(IdeaForm);

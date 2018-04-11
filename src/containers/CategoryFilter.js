import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCategoryFilter, removeCategoryFilter } from '../actions/categoryFilter';

class CategoryFilter extends Component {

  handleCategoryFilter(event) {
    let categoryId = event.target.value
    if (event.target.checked) {
      this.props.dipatch(addCategoryFilter(categoryId));
      else {
        this.props.dispatch(removeCategoryFilter(categoryId));
      }
    }
  }


  
}

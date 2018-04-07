import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateIdeaForm } from '../actions/ideaForm';


class IdeaForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentIdeaForm = Object.assign({}, this.props.ideaForm, {
      [name]: value
    })
    this.props.updateIdeaForm(currentIdeaForm)
  }

  render() {
    const { category_id, name, content, author } = this.props.ideaForm;

    return (
      <div>
        <h4>Submit Your Idea</h4>
        <form>
          <div>
          <label htmlFor="category">Category:</label>
            <select name="category_id" value={category_id} onChange={this.handleOnChange}>
              <option value="1">Social</option>
              <option value="2">Digital</option>
              <option value="3">Partnerships</option>
              <option value="4">On-Air</option>
              <option value="5">On-Ground</option>
            </select>
          </div>

          <div>
          <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              onChange={this.handleOnChange}
              value={name}
            />
          </div>

          <div>
          <label htmlFor="content">Content:</label>
            <textarea
              name="content"
              onChange={this.handleOnChange}
              value={content}
            />
          </div>

          <div>
          <label htmlFor="author">Author:</label>
            <input
              type="text"
              name="author"
              onChange={this.handleOnChange}
              value={author}
            />
          </div>
          <button type="submit">Submit Idea</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ideaForm: state.ideaForm
  }
}

 export default connect(mapStateToProps, { updateIdeaForm })(IdeaForm);

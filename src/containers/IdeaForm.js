import React, { Component } from 'react';
import { connect } from 'react-redux';

class IdeaForm extends Component {

  render() {
    const { category_id, name, content, author } = this.props.ideaForm;
    return (
      <div>
        <h4>Submit Your Idea</h4>
        <form>

          <div>
          <label htmlFor="category">Category:</label>
            <select value={category_id}>
              <option value=" "></option>
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
              value={name}
            />
          </div>

          <div>
          <label htmlFor="content">Content:</label>
            <textarea
              type="text"
              name="content"
              value={content}
            />
          </div>

          <div>
          <label htmlFor="author">Author:</label>
            <input
              type="text"
              name="author"
              value={author}
            />
          </div>
        </form>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    ideaForm: state.ideaForm
  })
}

 export default connect(mapStateToProps)(IdeaForm);

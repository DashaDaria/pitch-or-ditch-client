import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, Button, FormControl } from 'react-bootstrap';

import { updateIdeaForm } from '../actions/ideaForm';
import { createIdea } from '../actions/ideas';


class IdeaForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentIdeaForm = Object.assign({}, this.props.ideaForm, {
      [name]: value

    })
    this.props.updateIdeaForm(currentIdeaForm)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createIdea(this.props.ideaForm)
  }

  render() {
    const { category_id, name, content, author } = this.props.ideaForm;

    return (
      <div className="idea-form">
        <h4>Submit Your Idea</h4>
        <form onSubmit={this.handleOnSubmit}>

        <FormGroup controlId="formControlSelect">
          <ControlLabel>Category</ControlLabel>
          <FormControl componentClass="select" placeholder="choose category" name="category_id" value={category_id} onChange={this.handleOnChange}>
              <option></option>
              <option value="1">Social</option>
              <option value="2">Digital</option>
              <option value="3">Partnerships</option>
              <option value="4">On-Air</option>
              <option value="5">On-Ground</option>
            </FormControl>
            </FormGroup>



          <ControlLabel>Name: </ControlLabel>
          <FormControl
              type="text"
              name="name"
              onChange={this.handleOnChange}
              value={name}
            />

            <ControlLabel>Author: </ControlLabel>
              <FormControl
                type="text"
                name="author"
                onChange={this.handleOnChange}
                value={author}
              />

          <ControlLabel>Content: </ControlLabel>
            <textarea
              name="content"
              onChange={this.handleOnChange}
              value={content}
            />


          <div>
            <input
              type="hidden"
              name="votes"
            />
          </div>

          <Button bsStyle="default" type="submit">Submit Idea</Button>

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

 export default connect(mapStateToProps, { updateIdeaForm, createIdea })(IdeaForm);

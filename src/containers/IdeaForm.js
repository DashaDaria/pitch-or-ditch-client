import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, Button, FormControl } from 'react-bootstrap';
import { updateIdeaForm } from '../actions/ideaForm';
import { createIdea } from '../actions/ideas';


class IdeaForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentIdeaForm =
      Object.assign({}, this.props.ideaForm, { [name]: value })
    this.props.updateIdeaForm(currentIdeaForm)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createIdea(this.props.ideaForm)
  }

  render() {
    const { category_id, name, content, author } = this.props.ideaForm;
    return (
      <div>
      <h3>Submit Your Idea</h3>
        <div className="idea-form">
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

          <FormGroup controlId="formControlsText">
            <ControlLabel>Idea Name: </ControlLabel>
            <FormControl
              type="text"
              name="name"
              onChange={this.handleOnChange}
              value={name}
              placeholder="What's your idea called?"
              />
          </FormGroup>

          <FormGroup controlId="formControlsText">
            <ControlLabel>Author: </ControlLabel>
              <FormControl
                type="text"
                name="author"
                onChange={this.handleOnChange}
                value={author}
                placeholder="Share your name!"
            />
          </FormGroup>

          <FormGroup controlId="formControlTextarea">
            <ControlLabel>Content: </ControlLabel>
              <FormControl
                componentClass="textarea" placeholder="What's the 30 second elevator pitch?"
                name="content"
                onChange={this.handleOnChange}
                value={content}
              />
          </FormGroup>

          <div>
            <input type="hidden" name="votes"/>
          </div>
          <Button bsStyle="primary" type="submit">Submit Idea</Button>
        </form>
      </div>
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

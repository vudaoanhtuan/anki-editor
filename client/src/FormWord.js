import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

class Word extends React.Component {
  coppyOnClick(event) {
    navigator.clipboard.writeText(this.props.word);
  }

  render() {
    return (
      <center>
        <h1 
          onClick={this.coppyOnClick.bind(this)}
          style={{cursor: "pointer"}}
        >
          {this.props.word}
        </h1>
      </center>
    );
  }
}

class Definition extends React.Component {
  render() {
    return (
      <div>
        {this.props.pronunciation}
        {this.props.en_mean}
        {this.props.en_example}
      </div>
    )
  }
}

class FormWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      definition: " "
    }
  }

  copyOnClick(event) {
    navigator.clipboard.writeText(event.target.text);
  }

  changeDefinition(event) {
    this.setState({definition: event.target.value});
  }

  render() {
    return (
      <Form>
        <Word word={"Hello"}/>
        <Definition/>
        <Form.Group controlId="exampleForm.definition">
          <Form.Label>Definition</Form.Label>
          <Form.Control as="textarea" rows="6" onChange={this.changeDefinition.bind(this)}/>
        </Form.Group>
        <center>
          <Button>Save</Button>{' '}
          <Button variant="secondary">Next</Button>
        </center>
      </Form>
    )
  }
}


export default FormWord;

import React, { Component } from 'react';
import api from '../../services/api';
import { Container } from './styles';

export default class form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
  }

  changeHandler = (e) => {
    this.setState({ [e.target.title]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    api.post('/posts', this.state).then(response => {
      console.log(response)

    })
  }

  render() {
    const { title, body } = this.state
    return (
      <>
        <Container>
          <form onSubmit={this.submitHandler}>
            <div>
              <p>Title</p>
              <input type="text" title="title" value={title} onChange={this.changeHandler} />
            </div>
            <div>
              <p>Body</p>
              <input type="text" title="body" value={body} onChange={this.changeHandler} />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </Container>
        <div />
      </>
    )
  }
}
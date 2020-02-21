import React, { Component } from 'react'

class EventInput extends Component {
  state = {
    text: ''
  }

  manejador = event => {
    console.log(event.target.value)
    this.setState({
      text: event.target.value
    })
  }

  render () {
    return (
      <div>
        <input
          type='text'
          onChange={this.manejador}
          placeholder='Ingresa un texto: '
        ></input>
        <h1>{this.state.text}</h1>
      </div>
    )
  }
}

export default EventInput

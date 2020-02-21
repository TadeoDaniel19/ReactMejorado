import React, { Component } from 'react'

class PersistenceEvent extends Component {
  state = {
    color: 'red'
  }

  handlerChange = event => {
    const color = event.target.value
    this.setState(state => ({
      color
    }))
  }

  render () {
    return (
      <div>
        <input
          type='text'
          onChange={this.handlerChange}
          placeholder='cambia el color de este label'
        ></input>
        <h1 style={{ color: this.state.color }}>{this.state.color}</h1>
      </div>
    )
  }
}

export default PersistenceEvent

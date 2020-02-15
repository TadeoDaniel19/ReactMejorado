import React, { Component } from 'react'

class Cat extends Component {
  render() {
    return (
      <div>
        <h1>
          Gato 🐈
        {
            this.props.name,
            this.props.age
        }
        </h1>
        <pre>
          {JSON.stringify(this.props, null, 4)}
        </pre>
      </div>
    )
  }
}

export default Cat
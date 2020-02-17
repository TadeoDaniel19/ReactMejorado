import React, {Component} from 'react'

class UserCard extends Component {
  render () {
    return (
      <div>
      <h2>------------------------------------------</h2>  
      <strong>Nombre</strong> : {this.props.name} <br/>
      <strong>Edad</strong> : {this.props.age} <br/>
      <strong>Estudia</strong> : {this.props.study ? 's' : 'n'}
      </div>
    )
  }
}

export default UserCard
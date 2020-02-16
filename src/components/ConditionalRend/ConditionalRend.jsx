import React, { Component } from 'react'

class ConditionalRend extends Component {
  render (){
    if(this.props.saluda) {
      return (
        <h1>Hola! eres un crack en react!</h1> 
      )
    } else {   
      return(
        <h2>Lo siento! no estas preparado para esto.</h2>
      )
      }
  }
}


export default ConditionalRend
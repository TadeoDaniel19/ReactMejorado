import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../../Redux/Actions/counterActions'

const CounterRedux = ({
  increment,
  decrement,
  counter,
  name
}) => {
    
  return (
    <div>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
      <h1>{counter}</h1>
      <strong>{name}</strong>
    </div>
  )
}

const mapStateToProps = state => {
  console.log('Hola state ----->',state)
  return {
    name: state.user.name,
    counter : state.counter
  }
}
const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(increment())
    },
    decrement: () => {
      dispatch(decrement())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux)
import React from 'react'
import { connect } from 'react-redux'
import {Button, Typography} from '@material-ui/core'
import { increment, decrement } from '../../Redux/Actions/counterActions'

const CounterRedux = ({
  increment,
  decrement,
  counter,
  name
}) => {
    
  return (
    <div>
      <Button onClick={increment} variant="contained" color="primary"> + </Button>
      <Button onClick={decrement}> - </Button>
      <Typography> {counter} </Typography>
      <Typography> {name} </Typography>
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

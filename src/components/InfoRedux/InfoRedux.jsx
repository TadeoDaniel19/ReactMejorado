import React from 'react'
import {TextField, Typography} from '@material-ui/core'
import { connect } from 'react-redux'
import {updateName} from '../../Redux/Actions/userActions'

const InfoRedux = props => {
  const handlerChange = (e) => {
    const name = e.target.value
    props.updateName(name)
  }

  return (
    <div>
      <Typography>{props.user.name} - {props.user.country}</Typography>
      <TextField onChange = {handlerChange} placeholder='INGRESA UN NOMBRE'/>
    </div>
  )
}

const mapStateToProps = state => {
  console.log('¿que guarda el estado? ---->', state)
  return {
    user: state.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    updateName: (name) => dispatch(updateName(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoRedux)

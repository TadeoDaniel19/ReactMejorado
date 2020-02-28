import React from 'react'
import { reduxForm, Field } from 'redux-form'
import {Button, TextField} from '@material-ui/core'

const LoginReduxForm = props => {
  const handleSubmit = formValues => {
    console.log('esto imprime ---->', formValues.password)
    if (
      formValues.email === 'hector_lectric@hotmail.com' &&
      formValues.password === '1234'
    ) {
      alert('Bienvenido!')
    } else {
      alert('Algo salio mal. vuelve a intentarlo!')
    }
  }

  return (
    <form onSubmit={props.handleSubmit(handleSubmit)}>
      <div>
        <label>E-mail: </label>
        <Field name='email' type='email' component='input' />
      </div>
      <div>
        <label>Password: </label>
        <Field name='password' type='password' component='input' />
      </div>
      <br></br>
      <button type='submit'>Login</button>
    </form>
  )
}

export default reduxForm({ form: 'logginForm' })(LoginReduxForm)

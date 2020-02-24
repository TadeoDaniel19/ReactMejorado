import React from 'react'
import { reduxForm, Field } from 'redux-form'

const LoginReduxForm = (props) => {
  const handleSubmit = formValues => {
    console.log( "esto imprime ---->", formValues)
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
      <button type='submit'>Login</button>
    </form>
  )
}

export default reduxForm({ form: 'logginForm' })(LoginReduxForm)

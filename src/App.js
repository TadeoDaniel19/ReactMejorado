import React from 'react'
import { Provider } from 'react-redux'
import store from './Redux/store'
import LoginReduxForm from './components/LoginReduxForm'
import { BrowserRouter, Route,NavLink } from 'react-router-dom'
import CounterRedux from './components/CounterRedux'
import InfoRedux from './components/InfoRedux'
import Todos from './components/Todos'
import {Typography} from '@material-ui/core'

const navStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  border: '1px solid #555',
  fontFamily: 'Charcoal',
  fontSize: '40px'
}

const secondStyle = {
  textAlign: 'center',
  borderBottom: '1px solid #555',
  color: 'white'
}

const Home = () => (
  <Typography>Bienvenido! </Typography>
)

const Navegation = () => {
  return (
    <nav style={navStyles}>
      <NavLink to='/' style={secondStyle}> Home </NavLink>
      <NavLink to='/login' exact style={secondStyle}> Login </NavLink>
      <NavLink to='/counter' exact style={secondStyle}> Counter </NavLink>
      <NavLink to='/info' exact style={secondStyle}> Info </NavLink>
      <NavLink to='/todo' exact style={secondStyle}> ToDo list </NavLink>
    </nav>
  )
}

const App = () => {
  /*   return (
      <Provider store={store}>
        <div>
         <LoginReduxForm /> 
        </div>
      </Provider>
    ) */
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navegation />
        <Route path='/' exact component={Home} />
        <Route path='/login' component={LoginReduxForm} />
        <Route path='/counter' component={CounterRedux} />
        <Route path='/info' component={InfoRedux} />
        <Route path='/todo' component={Todos} />
      </BrowserRouter>
    </Provider>
  )
}

export default App
import React from 'react'
import { Provider } from 'react-redux'
import store from './Redux/store'
import LoginReduxForm from './components/LoginReduxForm'
/* import CounterRedux from './components/CounterRedux'
import InfoRedux from './components/InfoRedux' */

const App = () => {
  return (
    <Provider store={store}>
      <div>
      { /*  <CounterRedux />
        <InfoRedux />  */}
       <LoginReduxForm /> 
      </div>
    </Provider>
  )

}

export default App
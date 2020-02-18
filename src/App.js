import React, { Component } from 'react'
import TarjetaFruta from './components/TarjetaFruta'
import Counter from './components/Counter'
import EventInput from './components/EventInput'
import PersistenceEvent from './components/PersistenceEvent'
import ChildComponent from './components/ChildComponent'
import ConditionalRend from './components/ConditionalRend'
import ListFruit from './components/ListFruit'
import Students from './Data/students'
import ControlComponent from  './ControlComponent'
import Calculator from './components/Calculator'
//import Cat from './components/Cat'
import style from './App.module.css'

const DataStudents = Students.youngs
/* const mishi = {
  lifes: 4,
  fights: 5,
  color: 'black'
}
 */

class App extends Component {
  state = {
    name :''
  }

  handlerChild = (name) => {
    this.setState({name})
  }

  render() {
    return (
      <div className={style.div}>
        <h1> Frutas </h1>
        <TarjetaFruta name='Mango' price='12.50' />
        <TarjetaFruta name='Melon' price='22.50' />
        <TarjetaFruta name='Manzana' price='8.50' />
        <br />
        <Counter />
        <br/>
        <EventInput />
        <PersistenceEvent />
        <ChildComponent
          onSaludar={this.handlerChild}
        />
        <h1> {this.state.name}</h1>
        {
        DataStudents.map((student,index) => {
          return (
            <ConditionalRend  key = {index} name = {student.name} age = {student.age} study = {student.study}/>
          )
        })  
        }
        <ListFruit /> 
        <ControlComponent />
        <br/>
        <Calculator />
      </div>
    )
  }
}

export default App
import React from 'react'
import TarjetaFruta from './components/TarjetaFruta'
import Counter from './components/Counter'
import EventInput from './components/EventInput'
//import Cat from './components/Cat'
import style from './App.module.css'

/* const mishi = {
  lifes: 4,
  fights: 5,
  color: 'black'
}
 */
const App = () => (
 <div className = {style.div}>
    <h1> Frutas </h1>
    <TarjetaFruta name='Mango' price='12.50' />
    <TarjetaFruta name='Melon' price='22.50' />
    <TarjetaFruta name='Manzana' price='8.50' />
    <Counter/>
    <EventInput />
  </div>
)

export default App
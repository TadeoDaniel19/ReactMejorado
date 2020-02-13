import React from 'react'
import TarjetaFruta from './components/TarjetaFruta'

const App = () => (
  <div>
    <h1> Frutas </h1>
    <TarjetaFruta name='Mango' price='12.50' />
    <TarjetaFruta name='Melon' price='22.50' />
    <TarjetaFruta name='Manzana' price='8.50' />
  </div>
)

export default App
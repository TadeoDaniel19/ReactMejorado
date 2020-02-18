import React, {Component} from 'react'
import Fruits from './Data/vegan'

const DataFruits = Fruits.fruits

class ControlComponent extends Component {
  render() {
    return (
      <div>
        <select>
        {
          DataFruits.map((fruit, index) => {
            return (<option key={index}> {index+1}.- {fruit} </option>)
          })
        }
        </select>
      </div>
    )
  }
}

export default ControlComponent

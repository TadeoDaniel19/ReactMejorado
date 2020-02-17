import React, {Component} from 'react'
import Fruit from '../../Data/vegan'
const DataFruits = Fruit.fruits

class ListFruit extends Component {
  render () {
    return (
      <div> 
        <ul>
        {
          DataFruits.map((fruit,index) => {
            return (
              <li key = {index}> 
                {fruit}
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}

export default ListFruit
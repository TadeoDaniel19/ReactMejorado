import React, {Component} from 'react'

class ChildComponent extends Component {
  handlerClick = () => {
this.props.onSaludar('jijo ya se react!')
  }

  render(){
    return (
      <div>
        <h2> Componente Hijo </h2>
        <button 
        onClick={this.handlerClick}
        >
          Saludar!
        </button>
      </div>
    )
  }
}

export default ChildComponent
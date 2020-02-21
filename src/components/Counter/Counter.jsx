import React, { Component } from 'react'
import style from './Counter.module.css'
class Counter extends Component {
  state = {
    video: {
      title: 'Vinco es lo maximo!',
      likes: 0
    }
  }

  add = () => {
    this.setState(prevState => ({
      video: {
        ...this.state.video,
        likes: this.state.video.likes + 1
      }
    }))
  }

  render () {
    return (
      <div>
        <h1 className={style.h1}>{this.state.video.title}</h1>
        <button onClick={this.add}>Likes : ({this.state.video.likes})</button>
      </div>
    )
  }
}

export default Counter

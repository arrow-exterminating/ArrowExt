import React, { Component } from 'react'
import SpiderController from './Auz-Bug-92fb1fb/bug'

class Bug extends Component {
  render() {
    return (
      <div className="bug__container">
        {new SpiderController()}
      </div>
    )
  }
}

export default Bug
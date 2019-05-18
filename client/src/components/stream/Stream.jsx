import React, { Component } from 'react'
import StreamList from './Stream'

class Stream extends Component {
  render() {
    return (
      <div className="stream__container">
        <StreamList />
      </div>
    )
  }
}
export default Stream
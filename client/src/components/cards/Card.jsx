import React, { Component } from 'react'
import spider from '../../Assets/Pictures/SpiderArrow.jpg'
import { Link } from 'react-router-dom'

class Card extends Component {
  render() {
    return (
      <div className="card__container">
        <Link to="/stream">
          <img className="spider__card" src={spider} height='400px' width='700px' />
        </Link>
      </div>
    )
  }
}

export default Card
import React, { Component } from 'react'
import Logo from '../../Assets/Pictures/AELogo.jpg'

class Nav extends Component {
  render() {
    return (
      <div className="nav__container">
        <img className="aeLogo" src={Logo} height="150px" width="150px" />
        <h1>Arrow Exterminating</h1>
      </div>
    )
  }
}

export default Nav
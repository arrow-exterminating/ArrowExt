import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav'
import Card from './components/cards/Card'
import Stream from './components/stream/Stream'
import { Switch, Route } from 'react-router-dom'
//import Bug from './components/bugs/Bug'



class App extends Component {

  // componentDidUpdate() {
  //   const script = document.createElement("script")
  //   script.src = './components/bugs/Auz-Bug-92fb1fb/bug.js'
  //   script.async = true
  //   document.body.appendChild(script)
  //   const script2 = document.createElement("script")
  //   script.src = './components/bugs/bugController.js'
  //   document.body.appendChild(script2)
  // }

  render() {
    return (
      <div className="App">
        <Nav />
        <Card />
        {/* <Switch>
          <Route exact path="/"
            render={<Nav />}
          />
          
        </Switch> */}
        <Switch>
          <Route path="/stream"
            render={<Stream />}
          />
        </Switch>
        
      </div>
    );
  }
}

export default App;

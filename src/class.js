import React, { Component } from 'react'
import Display from './Display';

export default class App extends Component {
  state={
    name:"Devika"
  }
  render() {
    return (
      <div>
        <center>
          
          <Display name={this.state.name} />
          <h1>Happy Learning {this.state.name}</h1>
          
          </center>
      </div>
    )
  }
}
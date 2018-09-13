import React, { Component } from 'react';
import piguGreen from './assets/images/pigu-green.svg';
import './assets/style/home.css'


export class main extends Component {
  render() {
    return (
      <div className= "pigu">
			<img src={piguGreen} />
      </div>
    )
  }
}

export default main

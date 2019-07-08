// Standard Include
import React, { Component } from 'react';

// Image Resources
import logo from '../../../resource/images/logo.svg';

// Components

// Style Sheets
import './mainpage.css';

class Mainpage extends Component {
  render() {
    return (
      <div className="mainpage">
        <header className="mainpage-header">
          <img src={logo} className="mainpage-logo" alt="logo" />
          <h1 className="mainpage-title">Welcome to Meal-Kok</h1>
        </header>
      </div>
    );
  }
}

export default Mainpage;
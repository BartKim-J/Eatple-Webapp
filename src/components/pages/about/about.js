// Standard Include
import React, { Component } from 'react';

// Image Resources
import logo from '../../../resource/images/logo.svg';

// Components

// Style Sheets
import './about.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <header className="about-header">
          <img src={logo} className="about-logo" alt="logo" />
          <h1 className="about-title">Welcome to React</h1>
        </header>
        <p className="about-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default About;
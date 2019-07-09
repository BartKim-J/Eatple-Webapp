// Standard Include
import React, { Component } from 'react';

// Components
import ContentService from './Contents/ContentService'

// Style Sheets
import './Homepage.css';

class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
          <ContentService/>
          <ContentService/>
          <ContentService/>
          <ContentService/>
      </div>
    );
  }
}

export default Homepage;
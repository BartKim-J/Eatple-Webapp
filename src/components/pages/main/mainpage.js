// Standard Include
import React, { Component } from 'react';

// Image Resources
import logo from '../../../resource/images/logo.png';

// Components
import ContentsService from './contents/content_service'

// Style Sheets
import './mainpage.css';

class Mainpage extends Component {
  render() {
    return (
      <div className="mainpage">
          <ContentsService/>
          <ContentsService/>
          <ContentsService/>
          <ContentsService/>
      </div>
    );
  }
}

export default Mainpage;
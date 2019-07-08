// Standard Include
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components
import { Mainpage, About } from '../components/pages/page_index';

// Style Sheets
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Mainpage}/>
        <Route path="/about"  component={About}/>
      </div>
    );
  }
}

export default App;
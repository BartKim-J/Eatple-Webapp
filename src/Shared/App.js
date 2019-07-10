// Standard Include
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components
import { Homepage, About, Membership, SignIn, SignUp } from '../Components/Pages/PageIndex';

import Menu from '../Components/Layouts/Menu/Menu';
import Footer from '../Components/Layouts/Footer/Footer';

// Image Resources

// Style Sheets
import './App.scss';

class App extends Component {
  render() {
    return (
      <div id="outer-container">
        <Menu pageWrapId={"page-wrap"} outerContainerId={"App"} width={'400px'}/>
        <div id="page-wrap">
          <div id="contents">
            <Route exact path="/"      component={Homepage}/>
            <Route path="/Membership"  component={Membership}/>
            <Route path="/SignIn"      component={SignIn}/>
            <Route path="/SignUp"      component={SignUp}/>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
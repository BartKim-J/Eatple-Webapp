// Standard Include
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components
import { Homepage, Membership, SignIn, SignUp, Payment } from 'Components/Pages/PageIndex';

import { Menu, SideMenu } from 'Components/Layouts/Menu/Menu';
import Footer from 'Components/Layouts/Footer/Footer';

// Image Resources

// Style Sheets
import './App.scss';

class App extends Component {
  render() {
    return (
      <div id="outer-container">
        <SideMenu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} width={'20vw'} />
        <div id="page-wrap">
          <Menu />
          <div id="contents" className="contents">
            <Route exact path="/" component={Homepage} />
            <Route path="/Membership" component={Membership} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Payment" component={Payment} />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
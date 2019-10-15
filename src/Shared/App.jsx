import React, { PureComponent } from 'react';

import { Switch, Route } from 'react-router-dom';

import {
  Homepage,
  Membership,
  SignIn,
  SignUp,
  Payment,
  PaymentResult,
} from 'components/Pages/PageIndex';

import Menu from 'components/Layouts/Menu/Menu';

// import Footer from 'components/Layouts/Footer/Footer';

import './App.scss';

export default class App extends PureComponent {
  render() {
    return (
      <div className="out-container">
        <Menu />
        <div className="inner-container">
          <div id="contents" className="contents">
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/membership" component={Membership} />
              <Route path="/signIn" component={SignIn} />
              <Route path="/signUp" component={SignUp} />

              <Route exact path="/payment" component={Payment} />
              <Route exact path="/payment/result" component={PaymentResult} />
              {/*
                <Route exact path="/certification" component={Certification} />
                <Route exact path="/certification/result" component={CertificationResult} />
              */}
              {/* <Route component={ErrorView} /> */}
            </Switch>
          </div>

          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}

import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import { Homepage, Payment, PaymentResult, Error } from 'components/Pages/PageIndex';

import Menu from 'components/Layouts/Menu';
import Footer from 'components/Layouts/Footer';

// import Footer from 'components/Layouts/Footer/Footer';

import './App.scss';

export default function App() {
  return (
    <Router>
      <div className="out-container">
        <Menu />
        <div className="inner-container">
          <div id="contents" className="contents">
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/payment" component={Payment} />
              <Route exact path="/payment/result" component={PaymentResult} />
              {/*
                <Route exact path="/certification" component={Certification} />
                <Route exact path="/certification/result" component={CertificationResult} />
              */}
              <Route component={Error} />
            </Switch>
          </div>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

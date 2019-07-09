// Standard Include
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components
import { Homepage, About, SignIn, SignUp } from '../Components/Pages/PageIndex';

import Menu from '../Components/Layouts/Menu/Menu';
import Footer from '../Components/Layouts/Footer/Footer';

// Image Resources

// Style Sheets
import './App.css';

class App extends Component {
  render() {
    let links = [
      { label: 'Homepage', link: '/', active: true },
      { label: 'About', link: '/About' },
      { label: 'SignIn', link: '/SignIn' },
      { label: 'SignUp', link: '/SignUp' },
    ];

    return (
      <div>
        <Menu links={links} />

        <div>
          <Route exact path="/" component={Homepage}/>
          <Route path="/About"  component={About}/>
          <Route path="/SignIn"  component={SignIn}/>
          <Route path="/SignUp"  component={SignUp}/>
        </div>

        <Footer/>
      </div>
    );
  }
}

export default App;
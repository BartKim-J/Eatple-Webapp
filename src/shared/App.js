// Standard Include
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components
import { Mainpage, About } from '../components/pages/page_index';

import Menu from '../components/layouts/nav/menu';
import Footer from '../components/layouts/footer/footer';

// Image Resources

// Style Sheets
import './App.css';

class App extends Component {
  render() {
    let links = [
      { label: 'Mainpage', link: '/', active: true },
      { label: 'About', link: '/about' },
    ];

    return (
      <div>
        <Menu links={links} />

        <div>
          <Route exact path="/" component={Mainpage}/>
          <Route path="/about"  component={About}/>
        </div>

        <Footer/>
      </div>
    );
  }
}

export default App;
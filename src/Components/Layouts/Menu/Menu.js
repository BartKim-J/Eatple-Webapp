// Standard Include
import React, { Component } from 'react';
import { push as BuggerMenu } from "react-burger-menu";

import { Navbar, Nav } from 'react-bootstrap';

// Components

// Style Sheets
import './Menu.scss';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listDataFromChild: null
        };    
    }

    render() {      
        return (
            <div>
                <div className="bugger_menu-wrap">
                    <BuggerMenu {...this.props} className="bugger_menu">
                        <a className="menu-item" href="/">Main</a>
                        <a className="menu-item" href="/Membership ">Membership</a>
                        <a className="menu-item" href="/SignIn">SignIn</a>
                        <a className="menu-item" href="/SignUp">SignUp</a>
                        <a className="menu-item" href="/About">About</a>
                    </BuggerMenu>
                </div>
                
                <div className="nav_var-wrap">
                    <Navbar className="nav_var">
                        <Navbar.Brand href="/">
                            <img
                                alt="MealKok"
                                src="https://mealkok.s3-ap-northeast-1.amazonaws.com/images/layouts/logo.png"

                                className="d-inline-block align-top nav_menu-logo"
                            />
                        </Navbar.Brand>
                        <Nav className="mr-auto nav_menu-items">
                            <Nav.Link className="nav_menu-item" href="/">MAIN</Nav.Link>
                            <Nav.Link className="nav_menu-item" href="/about">ABOUT</Nav.Link>
                        </Nav>
                    </Navbar>
                </div>
            </div>
        );
    }
}

export default Menu;

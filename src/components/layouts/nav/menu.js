// Standard Include
import React, { Component } from 'react';
import { stack as BuggerMenu } from "react-burger-menu";
import { Navbar, NavItem, NavDropdown, Nav } from 'react-bootstrap';

// Image Resources
import logo from '../../../resource/images/logo.png'

// Components

// Style Sheets
import './menu.css';

class Menu extends Component {
    render() {
        return (
            <div>
                <div className="bugger_menu-wrap">
                    <BuggerMenu className="bugger_menu" right width={ '400px' }>
                        <a className="menu-item" href="/">Main</a>
                        <a className="menu-item" href="/ellydesign ">Elly's Design</a>
                        <a className="menu-item" href="/benlab">Ben's Lab</a>
                        <a className="menu-item" href="/about">About</a>
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

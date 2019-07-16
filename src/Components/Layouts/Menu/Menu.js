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

        };    
    }

    render() {      
        return (               
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
                        <Nav.Link className="nav_menu-item" href="/">밀콕이란?</Nav.Link>
                        <Nav.Link className="nav_menu-item" href="/">멤버쉽</Nav.Link>
                        <Nav.Link className="nav_menu-item" href="/">
                            <div className="nav_menu-login">로그인</div>
                        </Nav.Link>
                    </Nav>
                </Navbar>
            </div>

        );
    }
}

class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listDataFromChild: null
        };    
    }

    render() {      
        return (            
            <div className="bugger_menu-wrap">
                <BuggerMenu {...this.props} className="bugger_menu">
                    <a className="menu-item" href="/">HOME</a>
                </BuggerMenu>
            </div>
        );
    }
}

export { Menu, SideMenu };

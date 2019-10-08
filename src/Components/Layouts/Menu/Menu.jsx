// Standard Include
import React, { Component } from 'react';
import { push as BuggerMenu } from "react-burger-menu";

import { Navbar, Nav } from 'react-bootstrap';

// Components

import Logo from '../Images/logo/logo@3x.png'
import TrialBtn from '../Images/Menu/btn-trial@3x.png'
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
                            src={Logo}

                            className="d-inline-block align-top nav_menu-logo"
                        />
                    </Navbar.Brand>
                    <Nav className="mr-auto nav_menu-items">
                        <Nav.Link className="nav_menu-item" href="/">멤버쉽</Nav.Link>
                        <Nav.Link className="nav_menu-item" href="/">
                            <div className="trial-btn-box">
                                <img className="btn" src={TrialBtn} alt=""/>
                            </div>
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
                    <a className="menu-item" href="/">홈</a>
                    <a className="menu-item" href="/">멤버쉽</a>
                    <a className="menu-item" href="/">무료 체험하기</a>
                </BuggerMenu>
            </div>
        );
    }
}

export { Menu, SideMenu };

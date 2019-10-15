import React, { Component } from 'react';
import { push as BuggerMenu } from 'react-burger-menu';

import './Menu.scss';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="bugger_menu-wrap">
        <BuggerMenu {...this.props} className="bugger_menu">
          <a className="menu-item" href="/">
            홈
          </a>
          <a className="menu-item" href="/">
            멤버쉽
          </a>
          <a className="menu-item" href="/">
            무료 체험하기
          </a>
        </BuggerMenu>
      </div>
    );
  }
}

export default SideMenu;

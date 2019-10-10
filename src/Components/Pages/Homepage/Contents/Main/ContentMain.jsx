import React, { PureComponent } from 'react';

import imageChef from './Images/Chef.svg';

import './ContentMain.scss';

export default class ContentMain extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="content-main">
        <div className="content-main-inner">
          <div className="main-image-box">
            <img className="image" src={imageChef} alt="chef" />
          </div>

          <div className="main-head-box">
            <div className="text-box">
              <div className="title">
                식사에 가치를 더하다,
                <br />
                <span className="highlight">잇플</span>
                <div className="sub-text">식사를 마음 껏 즐겨보세요.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

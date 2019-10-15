import React, { PureComponent } from 'react';

import btnTrial from './Images/btn-trial@3x.png';

import './ContentTrial.scss';

export default class ContentTrial extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="content-trial">
        <div className="content-trial-inner ">
          <div className="text-box">
            <div className="text">
              무료 체험하러
              <br />
              가볼까요 ?
            </div>
          </div>
          <div className="btn-box">
            <img className="btn" src={btnTrial} alt="trial" />
          </div>
        </div>
      </div>
    );
  }
}
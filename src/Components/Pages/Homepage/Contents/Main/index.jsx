import React, { PureComponent } from 'react';

import './index.scss';

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
          <div className="main-head-box">
            <div className="text-box">
              <div className="title">
                한끼 식사에
                <br />
                가치를 더하다, 
                <span className="highlight"> 잇플</span>
                <div className="sub-text">잇플은 한끼 식사를 5500원에 해결할 수 있는 테이크아웃 멤버쉽입니다.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

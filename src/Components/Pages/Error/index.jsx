import React, { PureComponent } from 'react';

import './index.scss';

export default class Error extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="error-section">
        <div className="error-inner">
          <div className="error-result-box-wrap">
            <div className="error-result-box">
              <span className="error-result-box-title">Error. </span>
              <span className="error-result-box-code">404</span>
              <br />
              <span className="error-result-box-text">Page Not Found.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

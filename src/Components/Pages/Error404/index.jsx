// Standard Include
import React, { PureComponent } from 'react';

// Style Sheets
import './index.scss';

export default class Homepage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="error-section">
        <div className="error-inner">
          <div className="error-result-box-wrapper">
            <div className="error-result-box">
              <span>Error 404</span>
              <br />
              <span>Page Not Found.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

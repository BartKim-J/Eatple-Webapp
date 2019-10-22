// Standard Include
import React, { PureComponent } from 'react';

// Components
import ContentMain from './Contents/Main';

// Style Sheets
import './index.scss';

export default class Homepage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="homepage-section">
        <ContentMain />
      </div>
    );
  }
}

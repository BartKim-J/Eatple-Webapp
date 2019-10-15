// Standard Include
import React, { PureComponent } from 'react';

// Components
import ContentMain from './Contents/Main';

// Style Sheets
import './Homepage.scss';

export default class Homepage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Homepage">
        <ContentMain />
      </div>
    );
  }
}

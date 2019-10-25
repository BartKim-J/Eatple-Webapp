import React, { PureComponent } from 'react';

import ContentMain from './Contents/Main';
import ContentMembership from './Contents/Membership';
import ContentTutorial from './Contents/Tutorial'
import ContentCalculator from './Contents/Caculator'
import ContentMenuSlide from './Contents/MenuSlide'
import ContentTale from './Contents/Tale'

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
        <ContentMembership />
        <ContentCalculator />
        <ContentTutorial />
        <ContentMenuSlide />
        <ContentTale />
      </div>
    );
  }
}

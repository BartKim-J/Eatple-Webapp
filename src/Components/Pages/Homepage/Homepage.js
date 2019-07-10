// Standard Include
import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

// Components
import Menu from '../../../Components/Layouts/Menu/Menu';
import Footer from '../../../Components/Layouts/Footer/Footer';
import { ContentMap, ContentService, ContentTrial, ContentWorks } from './Contents/ContentsIndex'

// Style Sheets
import './Homepage.scss';

const SEL = 'homepage-section';
const SECTION_SEL = `.${SEL}`;

// NOTE: if using fullpage extensions/plugins put them here and pass it as props
const pluginWrapper = () => {
  /**
   * require('fullpage.js/vendors/scrolloverflow'); // Optional. When using scrollOverflow:true
   */
};

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  onLeave(origin, destination, direction) {
    console.log('onLeave', { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }

  render() {
    return (
      <div className="Homepage">
        <ReactFullpage
          debug /* Debug logging */
          navigation
          anchors={['Service', 'Works', 'Map', 'Trial']}
          sectionSelector={SECTION_SEL}
          onLeave={this.onLeave.bind(this)}
          pluginWrapper={pluginWrapper}
          render={comp => (
            <ReactFullpage.Wrapper>
              <div key="Service" className={SEL}>
                <ContentService/>
              </div>
              <div key="Works" className={SEL}>
                <ContentWorks/>
              </div>
              <div key="Map" className={SEL}>
                <ContentMap/>
              </div>
              <div key="Trial" className={SEL}>
              <ContentTrial/>
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}

export default Homepage;
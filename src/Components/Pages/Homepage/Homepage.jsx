// Standard Include
import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

// Components
import { ContentMain, ContentMap, ContentService, ContentTrial, ContentWorks } from './Contents/ContentsIndex'

// Style Sheets
import './Homepage.scss';


const fullpageOption = {
    lockAnchors: false,
    //anchors:['Service', 'Works', 'Map', 'Trial'],
    navigation: true,
    navigationPosition: 'right',
    //navigationTooltips: ['Service', 'Works', 'Map', 'Trial'],
    showActiveTooltip: false,
    //slidesNavigation: true,
    //slidesNavPosition: 'bottom',

    //Scrolling
    css3: true,
    scrollingSpeed: 780,
    //autoScrolling: true,
    //fitToSection: false,
    //fitToSectionDelay: 1000,
    scrollBar: false,
    //easing: 'easeInOutCubic',
    //easingcss3: 'ease',
    //loopBottom: false,
    //loopTop: false,
    //loopHorizontal: true,
    //continuousVertical: false,
    //continuousHorizontal: false,
    //scrollHorizontally: false,
    //interlockedSlides: false,
    //dragAndMove: false,
    offsetSections: true,
    //resetSliders: false,
    //fadingEffect: false,
    //normalScrollElements: '#element1, .element2',
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    //touchSensitivity: 15,
    //bigSectionsDestination: null,

    //Accessibility
    //keyboardScrolling: true,
    //animateAnchor: true,
    //recordHistory: true,

    //Design
    controlArrows: false,
    verticalCentered: true,
    //sectionsColor : ['#ccc', '#fff'],
    //paddingTop: '0',
    //paddingBottom: '0',
    //fixedElements: '#header, .footer',
    //responsiveWidth: 0,
    //responsiveHeight: 0,
    //responsiveSlides: false,
    //parallax: false,
    //parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
    //cards: false,
    //cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

    lazyLoading: true,
};

const SEL = 'homepage-section';
const SECTION_SEL = `.${SEL}`;

// NOTE: if using fullpage extensions/plugins put them here and pass it as props
const pluginWrapper = () => {
    //require('fullpage.js/vendors/scrolloverflow'); // Optional. When using scrollOverflow:true
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
                    {...fullpageOption}
                    sectionSelector={SECTION_SEL}
                    onLeave={this.onLeave.bind(this)}
                    pluginWrapper={pluginWrapper}

                    render={comp => (
                        <ReactFullpage.Wrapper>
                            <div key="Main" className={SEL}><ContentMain /></div>
                            <div key="Works" className={SEL}><ContentWorks /></div>
                            <div key="Service" className={SEL}><ContentService /></div>
                            <div key="Map" className={SEL}><ContentMap /></div>
                            <div key="Trial" className={SEL}><ContentTrial /></div>
                        </ReactFullpage.Wrapper>
                    )}
                />
            </div>
        );
    }
}

export default Homepage;
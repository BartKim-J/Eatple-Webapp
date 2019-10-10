import React, { PureComponent } from 'react';

import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';

import Slider from 'react-slick';

import ImgPinmap from './Images/pinMap.png';

import './ContentMap.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NaverMapClientID = 'cos7enbwmi';
export default class ContentMap extends PureComponent {
  render() {
    const settings = {
      className: 'center',
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 7,
      swipeToSlide: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
    };

    const slickItems = [];
    for (let i = 0; i < 20; i += 1) {
      slickItems.push(<div />);
    }

    return (
      <div className="content-map">
        <div className="content-map-inner">
          <div className="map-box">
            <div className="head">
              <div className="text">
                <img className="icon" src={ImgPinmap} alt="Pin Map" />
                서울시 강남구
              </div>
            </div>
            <RenderAfterNavermapsLoaded ncpClientId={NaverMapClientID}>
              <NaverMap
                ncpClientId={NaverMapClientID}
                className="map"
                mapDivId="maps-getting-started-uncontrolled" // default: react-naver-map
                defaultCenter={{ lat: 37.4979277, lng: 127.0266946 }}
                defaultZoom={12}
              />
            </RenderAfterNavermapsLoaded>
          </div>

          <div className="slider-box">
            <Slider className="slider" {...settings}>
              {slickItems}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

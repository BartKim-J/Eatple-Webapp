// Standard Include
import React, { Component } from 'react';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';

import Slider from "react-slick";
// Image Resources

// Components

// Style Sheets
import '../Stylesheet/Contents_Desktop.scss';
import '../Stylesheet/Contents_Tablet.scss';
import '../Stylesheet/Contents_Mobile.scss';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class ContentMap extends Component {
    render() {
        const settings = {
            className: "center",
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 7,
            swipeToSlide: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2000,
            afterChange: function(index) {
              console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
              );
            }
          };
      
        return (
            <div className="content-map">
                <div className="map">
                    <div className="map-title"> 
                        <div className="area">
                            <img 
                            className="map-pin"
                            src="https://mealkok.s3-ap-northeast-1.amazonaws.com/images/Contents/Map/mapPin.png"
                            alt="Map Pin"
                            />
                            
                            서울시 강남구
                        </div>
                    </div>
                    <RenderAfterNavermapsLoaded
                        ncpClientId='cos7enbwmi'
                    >
                        <NaverMap
                            className="NaverMap"
                            mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
                            defaultCenter={{ lat: 37.4979277, lng: 127.0266946 }}
                            defaultZoom={12}
                        />
                    </RenderAfterNavermapsLoaded>
                </div>
                <Slider 
                    className="slider"
                    {...settings}
                >
                    <div className="slideBox">
                        <h3>1</h3>
                    </div>
                    <div className="slideBox">
                        <h3>2</h3>
                    </div>
                    <div className="slideBox">
                        <h3>3</h3>
                    </div>
                    <div className="slideBox">
                        <h3>4</h3>
                    </div>
                    <div className="slideBox">
                        <h3>5</h3>
                    </div>
                    <div className="slideBox">
                        <h3>6</h3>
                    </div>
                    <div className="slideBox">
                        <h3>7</h3>
                    </div>
                    <div className="slideBox">
                        <h3>8</h3>
                    </div>
                    <div className="slideBox">
                        <h3>9</h3>
                    </div>
                    <div className="slideBox">
                        <h3>10</h3>
                    </div>
                    <div className="slideBox">
                        <h3>11</h3>
                    </div>
                    <div className="slideBox">
                        <h3>12</h3>
                    </div>
                    <div className="slideBox">
                        <h3>13</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default ContentMap;
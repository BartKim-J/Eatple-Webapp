// Standard Include
import React, { Component } from 'react';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';
// Image Resources

// Components

// Style Sheets
import '../Stylesheet/Contents_Desktop.scss';
import '../Stylesheet/Contents_Tablet.scss';
import '../Stylesheet/Contents_Mobile.scss';

class ContentMap extends Component {
    render() {
      return (
        <div className="content-map">
            <div className="map">
                <RenderAfterNavermapsLoaded
                  ncpClientId='cos7enbwmi'
                >
                  <NaverMap 
                    className = "NaverMap"
                    mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
                    defaultCenter={{ lat: 37.4979277, lng: 127.0266946 }}
                    defaultZoom={12}
                  />
                </RenderAfterNavermapsLoaded>
            </div>
        </div>
      );
    }
  }
  
  export default ContentMap;
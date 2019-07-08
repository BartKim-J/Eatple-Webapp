// Standard Include
import React, { Component } from 'react';

// Image Resources

// Components

// Style Sheets
import './contents_desktop.css';
import './contents_tablet.css';
import './contents_mobile.css';

class ContentsService extends Component {
    render() {
      return (
        <div className="content_service">
            <div>
                <div className="content_title">
                    <p className="text">이것은 바로 밀콕의 서비스 설명인건가?<br/>
                                        그래, 이것이 바로 밀콕 설명이다.<br/>
                                        이것은 설명이야.<br/>
                                        그리고 아래는 다운로드 라구.
                    </p>
                </div>

                <div className="download">
                    <div className="btn_box">
                        <button className="btn">
                            <p className="text">Google Play</p>
                        </button>
    
                        <button className="btn">
                            <p className="text">App Store</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default ContentsService;
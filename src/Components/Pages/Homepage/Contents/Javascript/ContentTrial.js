// Standard Include
import React, { Component } from 'react';

// Image Resources

// Components

// Style Sheets
import '../Stylesheet/Contents_Desktop.scss';
import '../Stylesheet/Contents_Tablet.scss';
import '../Stylesheet/Contents_Mobile.scss';

class ContentTrial extends Component {
    render() {
      return (
        <div className="content-trial">
            <div>
                <div className="title">
                    <p className="text">무료 체험을 하려는건가?<br/>
                                        아주 좋은 생각이군!<br/>
                                        아래 신청하기를 눌러 밀콕을 사용해보라구!
                    </p>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default ContentTrial;
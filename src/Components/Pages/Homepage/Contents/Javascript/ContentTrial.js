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
                    <div className="title">
                        <p className="text">
                            <br/>
                            <br/>
                            이제 무료 체험을 하러 <br/>
                            가볼까요?
                            <br/>
                            <br/>

                        </p>
                    </div>
            </div>
        );
    }
}

export default ContentTrial;
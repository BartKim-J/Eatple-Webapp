// Standard Include
import React, { Component } from 'react';

// Image Resources

// Components

// Style Sheets
import '../Stylesheet/Contents_Desktop.scss';
import '../Stylesheet/Contents_Tablet.scss';
import '../Stylesheet/Contents_Mobile.scss';

class ContentMain extends Component {
    render() {
        return (
            <div className="content-main">
                <div className="title">
                    <p className="text">
                        잇플
                    </p>
                </div>
            </div>
        );
    }
}

export default ContentMain;
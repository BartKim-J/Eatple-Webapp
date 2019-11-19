import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

export default function FloatBox({ className, icon, title, subTextLine1, subTextLine2 }) {
  return (
    <Styled.Wrap>
      <Styled.Container className={`${className}`}>
        <Styled.Icon>
          <div className="color-line" />
          <img src={icon} alt="Icon Value" draggable="false" />
        </Styled.Icon>

        <Styled.TextBoxWrap>
          <Styled.TextBox>
            <div className="title">{title}</div>
            <div className="sub-text">
              {subTextLine1}
              <br />
              {subTextLine2}
            </div>
          </Styled.TextBox>
        </Styled.TextBoxWrap>
      </Styled.Container>
    </Styled.Wrap>
  );
}
FloatBox.propTypes = {
  className: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTextLine1: PropTypes.string.isRequired,
  subTextLine2: PropTypes.string.isRequired,
};

const Styled = {};

Styled.Wrap = styled.div`
  z-index: 100;

  width: 100%;
`;

Styled.Container = styled.div`
  width: 100%;
`;

Styled.Icon = styled.div`
  position: relative;

  .color-line {
    position: absolute;
    top: 0;
    left: -0.8%;

    height: 100%;
    width: 2%;

    background: #fca800;
  }

  padding-left: 8%;

  img {
    width: 18%;
    max-width: 56px;
  }
`;

Styled.TextBoxWrap = styled.div`
  width: 100%;
  height: 33.3%;
`;

Styled.TextBox = styled.div`
  padding: 22% 5% 0 5%;

  .title {
    font-size: 1.2vw;
    font-family: 'S-CoreDream-Bold';
    line-height: 0.86;

    @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
      font-size: 20px;
    }
  }

  .sub-text {
    margin-top: 6%;

    font-size: 1vw;
    font-family: 'S-CoreDream';
    line-height: 1.46;

    @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
      font-size: 14px;
    }
  }
`;

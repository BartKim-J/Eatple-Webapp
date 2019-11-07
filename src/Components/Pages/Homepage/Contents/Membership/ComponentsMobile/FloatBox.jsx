import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

export default function FloatBox({ className, icon, title, subTextLine1, subTextLine2 }) {
  return (
    <Styled.Wrap>
      <Styled.Container className={`${className}`}>
        <Styled.Icon>
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
  position: absolute;
  right: 0;

  width: 70%;
  transform: translate(-19%, 0);

  z-index: 100;
`;

Styled.Container = styled.div`
  position: relative;

  width: 100%;
`;

Styled.Icon = styled.div`
  position: relative;

  img {
    width: 15%;
    max-width: 56px;
  }
`;

Styled.TextBoxWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 33.3%;
`;

Styled.TextBox = styled.div`
  padding: 3% 0 0 32%;

  .title {
    font-size: 4vw;
    font-family: 'S-CoreDream-6';
    line-height: 0.86;

    @media all and (max-width: ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT}) {
      font-size: 16px;
    }
  }

  .sub-text {
    margin-top: 3%;

    font-size: 2.7vw;
    font-family: 'S-CoreDream-3';
    line-height: 1.44;

    @media all and (max-width: ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT}) {
      font-size: 12px;
    }
  }
`;

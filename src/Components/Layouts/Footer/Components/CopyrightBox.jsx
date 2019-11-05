import React from 'react';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

export default function CopyrightBox() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        hey@eatple.com
        <br />
        ©2019 Astera Inc. All rights reserved.
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0;
`;

Styled.Container = styled.div`
  font-family: 'S-CoreDream-3';

  color: #ffffff;

  text-align: right;
  font-size: 0.8vw;
  line-height: 1.54;

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    font-size: 13px;
  }

  @media (max-aspect-ratio: 1/1) {
    font-size: 1.2vw;
    line-height: 1.68;
  }
`;

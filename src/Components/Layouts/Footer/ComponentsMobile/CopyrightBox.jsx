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
  left: 0;
  bottom: 0;
`;

Styled.Container = styled.div`
  font-family: 'S-CoreDream';

  color: #f8f8fa;

  text-align: left;
  font-size: 1.8vw;
  line-height: 1.54;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT}) {
    font-size: 8px;
  }
`;

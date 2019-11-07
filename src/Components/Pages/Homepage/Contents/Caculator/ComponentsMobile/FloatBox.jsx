import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

export default function FloatBox({ src, menuPrice, menuName }) {
  return (
    <Styled.Wrap>
      <Styled.Container>
        <Styled.MenuImage src={src} />
        <Styled.MenuInfo>{`${menuName} | ${menuPrice}원`}</Styled.MenuInfo>
      </Styled.Container>
    </Styled.Wrap>
  );
}
FloatBox.propTypes = {
  src: PropType.string.isRequired,
  menuPrice: PropType.number.isRequired,
  menuName: PropType.string.isRequired,
};

const Styled = {};

Styled.Wrap = styled.div`
  padding: 5%;
`;

Styled.Container = styled.div`
  width: 100%;
  max-width: 586px;

  height: 100%;
  max-height: 350px;

  object-fit: contain;
`;

Styled.MenuImage = styled.img`
  width: 100%;
`;

Styled.MenuInfo = styled.div`
  text-align: right;

  margin-top: 4%;

  font-family: 'S-CoreDream-6';
  font-size: 3vw;
  line-height: 1.5;
  color: #222222;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT}) {
    font-size: 12px;
  }
`;

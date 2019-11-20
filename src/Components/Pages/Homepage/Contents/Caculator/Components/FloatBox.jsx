import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

export default function FloatBox({ src, menuPrice, menuName }) {
  return (
    <Styled.Wrap>
      <Styled.Container>
        <Styled.ImageBox src={src} />
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
  position: relative;
`;

Styled.Container = styled.div`
  width: 32vw;
  max-width: 586px;

  height: calc(32vw * 0.5972);
  max-height: 350px;

  transform: translateY(-50%);

  object-fit: contain;
`;

Styled.ImageBox = styled.div`
  width: 100%;
  height: 100%;

  background-image: ${props => {
    return `url(${props.src})`;
  }};

  background-position: center center;
  background-size: cover;
`;

Styled.MenuInfo = styled.div`
  text-align: right;

  font-family: 'S-CoreDream-Bold';
  font-size: 1vw;
  line-height: 1.5;
  color: #222222;

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    font-size: 13px;
  }
`;

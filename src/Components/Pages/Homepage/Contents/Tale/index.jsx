import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useSpring } from 'react-spring';

import mediaConf from 'configure/mediaConfig';

import TextBox from './Components/TextBox';
import BoxAnimationBox from './Components/BoxAnimationBox';

export default function ContentTale() {
  const calc = (x, y) => [x - window.innerWidth * 0.6, y - window.innerHeight * 0.5];

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const { xy } = props;

  return (
    <Styled.Section onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <BoxAnimationBox xy={xy} />
      <Styled.Container>
        <TextBox />
      </Styled.Container>
    </Styled.Section>
  );
}
ContentTale.propTypes = {
  xy: PropTypes.array,
};
ContentTale.defaultProps = {
  xy: [0, 0],
};

const Styled = {};

Styled.Section = styled.section`
  position: relative;

  width: 100vw;
  height: calc(100vw * 0.48);

  z-index: 100;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0vh ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }
`;

Styled.Container = styled.div`
  position: relative;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  height: 100%;

  margin: 0 auto;
`;

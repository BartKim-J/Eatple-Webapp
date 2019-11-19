import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BrowserView, MobileView, isBrowser } from 'react-device-detect';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';

import { useSpring } from 'react-spring';

import mediaConf from 'configure/mediaConfig';

import TextBox from './Components/TextBox';
import BoxAnimationBox from './Components/BoxAnimationBox';

import MobileTextBox from './ComponentsMobile/TextBox';
import MobileBoxAnimationBox from './ComponentsMobile/BoxAnimationBox';

function ContentBrowser() {
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
ContentBrowser.propTypes = {
  xy: PropTypes.array,
};
ContentBrowser.defaultProps = {
  xy: [0, 0],
};

function ContentMobile() {
  const calc = (x, y) => [x - window.innerWidth * 0.6, y - window.innerHeight * 0.5];

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const { xy } = props;

  return (
    <MobileStyled.Section onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <MobileBoxAnimationBox xy={xy} />
      <MobileStyled.Container>
        <MobileTextBox />
      </MobileStyled.Container>
    </MobileStyled.Section>
  );
}
ContentMobile.propTypes = {
  xy: PropTypes.array,
};
ContentMobile.defaultProps = {
  xy: [0, 0],
};

export default function ContentTale() {
  if (isBrowser)
    return (
      <BrowserView>
        <ContentBrowser />
      </BrowserView>
    );

  return (
    <MobileView>
      <DeviceOrientation>
        <Orientation orientation="landscape" alwaysRender={false}>
          <ContentBrowser />
        </Orientation>

        <Orientation orientation="portrait" alwaysRender={false}>
          <ContentMobile />
        </Orientation>
      </DeviceOrientation>
    </MobileView>
  );
}

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

const MobileStyled = {};

MobileStyled.Section = styled.section`
  position: relative;

  width: 100vw;
  height: 60vh;

  z-index: 100;

  padding: 0 ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT_PADDING};
`;

MobileStyled.Container = styled.div`
  position: relative;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  height: 100%;

  margin: 0 auto;
`;

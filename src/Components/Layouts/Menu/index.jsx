import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

import urlConf from 'configure/urlConfig';
import mediaConf from 'configure/mediaConfig';

import Logo from 'resource/Image/ImgLogo.svg';

import BtnTrial from './Images/BtnFloating.svg';

function DesktopMenu() {
  const styleMenu = useSpring({
    from: { left: '0%', top: '-200%' },
    to: async next => {
      await next({
        top: '0%',
      });
    },
    delay: 2000,
  });

  return (
    <Styled.Section>
      <Styled.Container>
        <Styled.MenuBar style={styleMenu}>
          <Styled.Logo>
            <Link to={urlConf.Homepage}>
              <img
                alt="Logo"
                src={Logo}
                className="d-inline-block align-top menu-bar-logo"
                draggable="false"
              />
            </Link>
          </Styled.Logo>
          <Styled.ItemList>
            <Styled.Item>
              <a href={urlConf.KakaoChatbot}>
                <img
                  alt="Button Trial"
                  src={BtnTrial}
                  className="menu-bar-btn-trial"
                  draggable="false"
                />
              </a>
            </Styled.Item>
          </Styled.ItemList>
        </Styled.MenuBar>
      </Styled.Container>
    </Styled.Section>
  );
}

function MobileMenu() {
  return (
    <StyledMobile.Section>
      <StyledMobile.Container>
        <StyledMobile.MenuBar>
          <StyledMobile.Logo>
            <Link to={urlConf.Homepage}>
              <img
                alt="Logo"
                src={Logo}
                className="d-inline-block align-top menu-bar-logo"
                draggable="false"
              />
            </Link>
          </StyledMobile.Logo>
          <Styled.ItemList></Styled.ItemList>
        </StyledMobile.MenuBar>
      </StyledMobile.Container>
    </StyledMobile.Section>
  );
}

export default function Menu() {
  return (
    <>
      <DesktopMenu />
      <MobileMenu />
    </>
  );
}

const Styled = {};

Styled.Section = styled.section`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 50px;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_MOBILE_MAX}) {
    display: none;
  }

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0 ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }

  z-index: ${mediaConf.LAYOUT_DEFAULT_Z_INDEX};
`;

Styled.Container = styled.div`
  position: relative;
  top: 50%;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  height: 100%;

  margin: 0 auto;

  img {
    width: 100%;
  }
`;

Styled.MenuBar = styled(animated.div)`
  position: relative;

  width: 100%;
  height: 100%;
`;

Styled.Logo = styled.div`
  position: relative;
  bottom: 0;

  display: flex;
  float: left;

  width: 18%;
  max-width: 88px;
`;

Styled.ItemList = styled.div`
  position: relative;
  bottom: 0;

  display: flex;
  float: right;
`;

Styled.Item = styled.div`
  margin-left: 5vw;

  .menu-bar-btn-trial {
    width: 100%;
    max-width: 128px;
  }
`;

const StyledMobile = {};

StyledMobile.Section = styled.section`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 8vh;

  padding: 0 ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT_PADDING};

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_MOBILE_MAX}) {
    display: none;
  }

  z-index: ${mediaConf.LAYOUT_DEFAULT_Z_INDEX};
`;

StyledMobile.Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  margin: 0 auto;

  padding: 4% 0;

  img {
    width: 100%;
  }
`;

StyledMobile.MenuBar = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`;

StyledMobile.Logo = styled.div`
  position: relative;
  top: 50%;
  transform: translate(0, -50%);

  display: flex;
  float: left;

  width: 14vw;
  max-width: 88px;
`;

StyledMobile.ItemList = styled.div`
  position: relative;
  top: 50%;
  transform: translate(0, -50%);

  display: flex;
  float: right;
`;

StyledMobile.Item = styled.div`
  margin-left: 5vw;
`;

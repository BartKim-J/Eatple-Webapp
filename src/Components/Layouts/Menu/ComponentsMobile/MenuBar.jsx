import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

import urlConf from 'configure/urlConfig';

import Logo from 'resource/Image/ImgLogo.svg';

export default function MenuBar() {
  const styleMenu = useSpring({
    from: { top: '-200%' },
    to: async next => {
      await next({
        top: '0%',
      });
    },
    delay: 2000,
  });

  return (
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
      <Styled.ItemList></Styled.ItemList>
    </Styled.MenuBar>
  );
}

const Styled = {};

Styled.MenuBar = styled(animated.div)`
  position: relative;

  width: 100%;
  height: 100%;

  img {
    width: 100%;
  }
`;

Styled.Logo = styled.div`
  position: relative;
  top: 50%;
  transform: translate(0, -50%);

  display: flex;
  float: left;

  width: 14vw;
  max-width: 88px;
`;

Styled.ItemList = styled.div`
  position: relative;
  top: 50%;
  transform: translate(0, -50%);

  display: flex;
  float: right;
`;

Styled.Item = styled.div`
  margin-left: 5vw;
`;

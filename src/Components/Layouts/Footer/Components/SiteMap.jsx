import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

import { Link } from 'react-router-dom';

export default function SiteMap({ mapArray }) {
  return (
    <Styled.Wrap>
      <Styled.Container>
        {mapArray.map(entrySite => {
          return (
            <li key={entrySite.label}>
              <Link to={entrySite.link}>{entrySite.label}</Link>
            </li>
          );
        })}
      </Styled.Container>
    </Styled.Wrap>
  );
}
SiteMap.propTypes = {
  mapArray: PropTypes.array.isRequired,
};

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;

  top: 1%;
  right: 15%;
`;

Styled.Container = styled.ul`
  width: 31vw;
  max-width: 406px;

  li {
    display: inline-block;
    width: 40%;
    max-width: 160px;

    font-size: 0.8vw;
    font-family: 'S-CoreDream-Bold';
    line-height: 1.33;

    @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
      font-size: 15px;
    }

    @media (max-aspect-ratio: 1/1) {
      font-size: 1.2vw;
    }

    a {
      color: #ffffff;
    }
  }

  li:nth-child(odd) {
    margin-right: 10%;
  }

  li:hover {
    color: #ffffff;
  }
`;

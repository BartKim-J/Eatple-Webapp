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

  top: 25%;
  left: 0;
`;

Styled.Container = styled.ul`
  li {
    width: 100%;
    max-width: 160px;

    font-size: 2.6vw;
    font-family: 'S-CoreDream-Bold';
    line-height: 1.84;

    @media all and (max-width: ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT}) {
      font-size: 12px;
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

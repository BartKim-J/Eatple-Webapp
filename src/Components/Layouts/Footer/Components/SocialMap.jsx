import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

export default function SocialMap({ mapArray }) {
  return (
    <Styled.Wrap>
      <Styled.Container>
        {mapArray.map(entryIcon => {
          return (
            <li key={entryIcon.label}>
              <Link to={entryIcon.link} target="_blank" rel="noopener noreferrer">
                <img src={entryIcon.icon} alt={entryIcon.label} draggable="false" />
              </Link>
            </li>
          );
        })}
      </Styled.Container>
    </Styled.Wrap>
  );
}
SocialMap.propTypes = {
  mapArray: PropTypes.array.isRequired,
};

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;

  top: 0;
  right: 0;
`;

Styled.Container = styled.ul`
  li {
    display: inline-block;

    width: 1.8vw;
    max-width: 32px;

    margin-right: 22px;

    img {
      width: 100%;
    }
  }

  li:last-child {
    margin-right: 0;
  }
`;

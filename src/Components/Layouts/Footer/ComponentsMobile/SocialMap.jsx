import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function SocialMap({ mapArray }) {
  return (
    <Styled.Wrap>
      <Styled.Container>
        {mapArray.map(entryIcon => {
          return (
            <li key={entryIcon.label}>
              <a href={entryIcon.link} target="_blank" rel="noopener noreferrer">
                <img src={entryIcon.icon} alt={entryIcon.label} draggable="false" />
              </a>
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

    width: 5vw;
    max-width: 32px;

    margin-right: 10px;

    img {
      width: 100%;
    }
  }

  li:last-child {
    margin-right: 0;
  }
`;

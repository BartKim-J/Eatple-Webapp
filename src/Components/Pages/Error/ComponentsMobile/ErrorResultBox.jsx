import React from 'react';
import styled from 'styled-components';

export default function ErrorResultBox() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        <span className="error-text">Oops!</span>
        <br />
        <span className="error-code">404 - Page Not Found.</span>
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

Styled.Container = styled.div`
  position: relative;

  text-align: center;

  font-family: 'S-CoreDream-Bold';

  .error-text {
    font-family: 'S-CoreDream-Bold';
    color: #1c1c1c;
    line-height: 1.3;
    font-size: 10vw;
  }

  .error-code {
    font-family: 'S-CoreDream-Bold';
    color: #1c1c1c;
    font-size: 3vw;
  }
`;

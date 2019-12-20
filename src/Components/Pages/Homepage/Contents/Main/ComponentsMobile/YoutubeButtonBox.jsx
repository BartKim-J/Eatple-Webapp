/* eslint-disable no-await-in-loop */
import React, { useState } from 'react';
import styled from 'styled-components';

import ModalVideo from 'react-modal-video';

import ImgBtnViewVideo from '../Images/BtnViewVideo.svg';

export default function YoutubeButtonBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Styled.Wrap>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="SHjQAM1b9kY"
        onClose={() => {
          setIsOpen(false);
        }}
      />
      <Styled.Container
        type="button"
        className="btn-box"
        aria-label="Trial Eatple"
        tabIndex="0"
        onClick={() => {
          setIsOpen(true);
        }}
        onKeyDown={() => {
          setIsOpen(true);
        }}
      >
        <div className="button-image">
          <Styled.ImageBox src={ImgBtnViewVideo} />
        </div>
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  padding-top: 8%;
  margin-bottom: 0;
`;

Styled.Container = styled.button`
  position: relative;

  width: 32vw;
  max-width: 147px;
  height: calc(32vw * 0.14);
  max-height: 21px;

  .button-image {
    position: absolute;
    top: 0px;
    left: 0px;

    width: 100%;
    height: 100%;

    transition: all 0.5s;

    z-index: 2;
  }
`;

Styled.ImageBox = styled.div`
  width: 100%;
  height: 100%;

  background-image: ${props => {
    return `url(${props.src})`;
  }};

  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`;

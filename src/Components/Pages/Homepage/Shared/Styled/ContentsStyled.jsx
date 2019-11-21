import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

const ContentsStyled = {};

ContentsStyled.Stickyroll = styled.div`
  .stickyroll-inner {
    padding: 0 !important;
    margin: 0;
    background-color: unset;
  }
`;

ContentsStyled.Section = styled.section`
  position: relative;

  width: 100vw;
  height: 100vh;

  overflow: hidden;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0vh ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }

  @media (max-aspect-ratio: 1/1) {
    height: calc(100vw * 0.5625); // 16:9
  }
`;

ContentsStyled.Container = styled.div`
  position: relative;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  margin: 0 auto;

  height: 100%;
`;

ContentsStyled.MobileSection = styled.section`
  position: relative;

  width: 100vw;
  height: 100vh;

  padding: 0 ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT_PADDING};
`;

ContentsStyled.MobileContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  margin: 0 auto;
`;

export default ContentsStyled;

import React from 'react';
import styled from 'styled-components';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import { Homepage, FAQ, Payment, PaymentResult, TOS, PP, Error } from 'components/Pages/PageIndex';

import mediaConf from 'configure/mediaConfig';
import urlConf from 'configure/urlConfig';

import Menu from 'components/Layouts/Menu';
import Footer from 'components/Layouts/Footer';

export default function App() {
  return (
    <Router>
      <GlobalStyle>
        <Styled.AppSection>
          <Menu />

          <Styled.AppInner>
            <Styled.AppContent>
              <Switch>
                <Route exact path={urlConf.Homepage} component={Homepage} />
                <Route exact path={urlConf.FAQ} component={FAQ} />
                <Route exact path={urlConf.Payment} component={Payment} />
                <Route exact path={urlConf.PaymentResult} component={PaymentResult} />

                <Route exact path={urlConf.TOS} component={TOS} />
                <Route exact path={urlConf.PP} component={PP} />

                <Route exact path="robots.txt" />
                <Route component={Error} />
              </Switch>
              <Footer />
            </Styled.AppContent>
          </Styled.AppInner>
        </Styled.AppSection>
      </GlobalStyle>
    </Router>
  );
}

const Styled = {};

Styled.AppSection = styled.div`
  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_MIN}) and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_MAX}) {
    position: relative;
  }
  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_TABLET_MIN}) and (max-width: ${mediaConf.MEDIA_WIDTH_TABLET_MAX}) {
    position: relative;
  }
  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_MOBILE_MIN}) and (max-width: ${mediaConf.MEDIA_WIDTH_MOBILE_MAX}) {
    position: relative;
  }
`;

Styled.AppInner = styled.div`
  position: relative;
`;

Styled.AppContent = styled.div`
  min-height: 100vh;
`;

const GlobalStyle = styled.div`
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  input {
    border: none;
    outline: none;
  }

  a {
    color: #222222;
    outline: none;
  }

  a:hover {
    color: inherit;
  }

  a:active {
    color: inherit;
  }

  button {
    outline: none;
    border: none;

    background: none;
    padding: 0;

    cursor: pointer;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style-type: none;
  }
`;

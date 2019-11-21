/* eslint-disable no-param-reassign */
/**
 * useScroll React custom hook
 * Usage:
 *    const { scrollX, scrollY, scrollDirection } = useScroll();
 */

import React from 'react';
import PropTypes from 'prop-types';

import { BrowserView, MobileOnlyView, TabletView } from 'react-device-detect';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';

export default function ResponsiveView({ ContentBrowser, ContentMobile, ContentTablet }) {
  if (ContentMobile === undefined) {
    ContentMobile = ContentBrowser;
  }

  if (ContentTablet === undefined) {
    ContentTablet = ContentBrowser;
  }

  return (
    <>
      <BrowserView>
        <ContentBrowser />
      </BrowserView>
      <TabletView>
        <ContentTablet />
      </TabletView>
      <MobileOnlyView>
        <DeviceOrientation>
          <Orientation orientation="landscape" alwaysRender={false}>
            <ContentBrowser />
          </Orientation>

          <Orientation orientation="portrait" alwaysRender={false}>
            <ContentMobile />
          </Orientation>
        </DeviceOrientation>
      </MobileOnlyView>
    </>
  );
}
ResponsiveView.propTypes = {
  ContentBrowser: PropTypes.func.isRequired,
  ContentMobile: PropTypes.func,
  ContentTablet: PropTypes.func,
};
ResponsiveView.defaultProps = {
  ContentMobile: undefined,
  ContentTablet: undefined,
};

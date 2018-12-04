import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { compose, withProps } from 'recompose';

import './map.scss';

const Map = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyD5va3sU8CKXSh2CJ5LiPMKTLhiGWplguI',
    loadingElement: <div className="loading" style={{ height: '100%' }} />,
    containerElement: <div className="container-elt" />,
    mapElement: <div className="map" />
  }),
  withScriptjs,
  withGoogleMap
)(() => (
  <GoogleMap
    defaultCenter={{ lat: 37.783059, lng: -122.393636 }}
    defaultZoom={17}
  />
));

export default Map;

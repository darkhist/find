import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

import './map.scss';

const Map = ({ location }) => {
  const MapComponent = withGoogleMap(() => (
    <GoogleMap
      defaultCenter={location}
      defaultZoom={17}
    />
  ));

  return (
    <div>
      <MapComponent
        loadingElement={<div className="loading" style={{ height: '100%' }} />}
        containerElement={<div className="container-elt" />}
        mapElement={<div className="map" />}
      />
    </div>
  );
};

export default Map;

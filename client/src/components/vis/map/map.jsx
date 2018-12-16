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
        loadingElement={<div className="loading" />}
        containerElement={<div className="container-elt" />}
        mapElement={<div className="map" />}
      />
    </div>
  );
};

export default Map;

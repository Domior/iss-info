import React from 'react';
import { useSelector } from 'react-redux';

import { GoogleMap as Map, LoadScript, MarkerF } from '@react-google-maps/api';

import { GOOGLE_MAPS_API_KEY } from '../../../constants/api';

const GoogleMap = () => {
  const { coordinates } = useSelector(state => state.location);

  const mapContainerStyle = {
    width: '100%',
    height: '525px',
    border: `2px solid var(--border)`,
    borderRadius: '10px',
  };

  const position = {
    lat: coordinates[0],
    lng: coordinates[1],
  };
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <Map mapContainerStyle={mapContainerStyle} zoom={2.5} center={position}>
        <MarkerF
          position={position}
          icon={'http://open-notify.org/Open-Notify-API/map/ISSIcon.png'}
        />
      </Map>
    </LoadScript>
  );
};

export default GoogleMap;

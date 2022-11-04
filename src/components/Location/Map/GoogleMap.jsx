import React from 'react';
import { useSelector } from 'react-redux';
import { GoogleMap as Map, MarkerF, useLoadScript } from '@react-google-maps/api';

import { GOOGLE_MAPS_API_KEY } from '../../../constants/api';

const GoogleMap = () => {
  const { coordinates } = useSelector(state => state.location);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

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
    <>
      {isLoaded && (
        <Map mapContainerStyle={mapContainerStyle} zoom={2.5} center={position}>
          <MarkerF
            position={position}
            icon={'http://open-notify.org/Open-Notify-API/map/ISSIcon.png'}
          />
        </Map>
      )}
    </>
  );
};

export default GoogleMap;

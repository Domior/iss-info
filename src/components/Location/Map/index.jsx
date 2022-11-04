import React from 'react';
import { useSelector } from 'react-redux';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

import { GOOGLE_MAPS_API_KEY } from '../../../constants/api';

// import styles from './Map.module.scss';

const Map = () => {
  const { coordinates } = useSelector(state => state.location);

  const mapContainerStyle = {
    width: '100%',
    height: '530px',
  };

  const position = {
    lat: coordinates[0],
    lng: coordinates[1],
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={2} center={position}>
        <MarkerF
          position={position}
          icon={'http://open-notify.org/Open-Notify-API/map/ISSIcon.png'}
        />
      </GoogleMap>
    </LoadScript>

    // <MapContainer
    //   center={coordinates}
    //   zoom={1}
    //   scrollWheelZoom={false}
    //   className={styles.mapContainer}
    // >
    //   <TileLayer
    //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //   />
    //   <Marker position={coordinates}>
    //     <Popup>Current location of the ISS in space</Popup>
    //   </Marker>
    // </MapContainer>
  );
};

export default Map;

import React from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import styles from './Map.module.scss';

const Map = () => {
  const { coordinates } = useSelector(state => state.location);

  return (
    <MapContainer
      center={coordinates} //sometimes lags and doesn't center the map
      zoom={1.5}
      scrollWheelZoom={false}
      className={styles.mapContainer}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates}>
        <Popup>Current location of the ISS in space</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;

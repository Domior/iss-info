import React from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  const { coordinates } = useSelector(state => state.location);
  console.log(coordinates);

  return (
    <MapContainer
      center={coordinates}
      zoom={1}
      scrollWheelZoom={false}
      style={{
        width: '800px',
        height: '400px',
        position: 'relative',
        outline: 'none',
      }}
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

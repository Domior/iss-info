import React from 'react';

const Coordinates = ({ position }) => {
  return (
    <div>
      Current location of the ISS
      <div>longitude: {position.longitude}</div>
      <div>latitude: {position.latitude}</div>
    </div>
  );
};

export default Coordinates;

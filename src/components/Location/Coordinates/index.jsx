import React from 'react';
import { useSelector } from 'react-redux';

const Coordinates = () => {
  const { coordinates } = useSelector(state => state.location);

  return (
    <div>
      Current location of the ISS
      <div>longitude: {coordinates[0]}</div>
      <div>latitude: {coordinates[1]}</div>
    </div>
  );
};

export default Coordinates;

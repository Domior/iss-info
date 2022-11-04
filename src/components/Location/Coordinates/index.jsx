import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Coordinates.module.scss';

const Coordinates = () => {
  const { coordinates } = useSelector(state => state.location);

  return (
    <div className={styles.container}>
      <h4>Current location of the ISS:</h4>
      <div className={styles.coordinates}>
        <p>longitude: {coordinates[0]}</p>
        <p>latitude: {coordinates[1]}</p>
      </div>
    </div>
  );
};

export default Coordinates;

import React from 'react';

import GoogleMap from './GoogleMap';
import LeafletMap from './LeafletMap';

import styles from './Map.module.scss';

const Map = () => {
  const [selectedMap, setSelectedMap] = React.useState('google');

  const handleClick = () => {
    selectedMap === 'google' ? setSelectedMap('leaflet') : setSelectedMap('google');
  };

  return (
    <>
      {selectedMap === 'google' ? <GoogleMap /> : <LeafletMap />}
      <button onClick={handleClick} className={styles.switchButton}>
        Click to switch Google Maps/Leaflet Maps
      </button>
    </>
  );
};

export default Map;

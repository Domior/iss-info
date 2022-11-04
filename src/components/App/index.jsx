import React from 'react';
import { useDispatch } from 'react-redux';

import Crew from '../Crew';
import Date from '../Date';
import Coordinates from '../Location/Coordinates';
import Map from '../Location/Map';

import { fetchCrew } from '../../redux/slices/crewSlice';
import { fetchLocation } from '../../redux/slices/locationSlice';

import styles from './App.module.scss';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCrew());
    dispatch(fetchLocation());
    const interval = setInterval(() => {
      dispatch(fetchCrew());
      dispatch(fetchLocation());
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <>
      <h1 className={styles.title}>ISS tracker</h1>
      <div className={styles.wrapper}>
        <div className={styles.locationContainer}>
          <Coordinates />
          <Map />
        </div>
        <div className={styles.crewContainer}>
          <Date />
          <Crew />
        </div>
      </div>
    </>
  );
};

export default App;

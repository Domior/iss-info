import React from 'react';
import { useDispatch } from 'react-redux';

import Crew from './components/Crew';
import Date from './components/Date';
import Coordinates from './components/Location/Coordinates';
import Map from './components/Location/Map';

import { fetchCrew } from './redux/slices/crewSlice';
import { fetchLocation } from './redux/slices/locationSlice';

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
      <div>
        <Map />
      </div>

      <Coordinates />
      <Date />
      <Crew />
    </>
  );
};

export default App;

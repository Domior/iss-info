import React from 'react';
import axios from 'axios';

import Crew from './components/Crew';
import Date from './components/Date';
import Coordinates from './components/Location/Coordinates';

import { API_ISS_CREW, API_ISS_LOCATION } from './constants/api';

const App = () => {
  const [crew, setCrew] = React.useState([]);
  const [timestamp, setTimestamp] = React.useState(null);
  const [position, setPosition] = React.useState({});

  React.useEffect(() => {
    try {
      axios.get(API_ISS_CREW).then(res => {
        setCrew(res.data.people.filter(person => person.craft === 'ISS'));
      });
    } catch (error) {
      console.log(error);
    }

    try {
      axios.get(API_ISS_LOCATION).then(res => {
        setTimestamp(res.data.timestamp);
        setPosition(res.data.iss_position);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Coordinates position={position} />
      <Date timestamp={timestamp} />
      <Crew crew={crew} />
    </>
  );
};

export default App;

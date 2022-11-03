import React from 'react';
import axios from 'axios';

import Crew from './components/Crew';

import { API_ISS_CREW } from './constants/api';

const App = () => {
  const [crew, setCrew] = React.useState([]);

  React.useEffect(() => {
    try {
      axios.get(API_ISS_CREW).then(res => {
        setCrew(res.data.people.filter(person => person.craft === 'ISS'));
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Crew crew={crew} />
    </>
  );
};

export default App;

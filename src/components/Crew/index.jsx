import React from 'react';
import { useSelector } from 'react-redux';

import Person from './Person';

const Crew = () => {
  const { crew, amount } = useSelector(state => state.crew);

  return (
    <>
      {crew?.map((person, i) => (
        <Person key={i} photo={person.photo} name={person.name} />
      ))}
      Total crew: {amount} people on the ISS
    </>
  );
};

export default Crew;

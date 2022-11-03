import React from 'react';

import { API_PHOTO } from '../../constants/api';
import { getRandomInt } from '../../utils/getRandomInt';

import Person from './Person/Person';

const names = [
  'jodi',
  'julie',
  'jolee',
  'james',
  'jai',
  'jean',
  'jerry',
  'jon',
  'jazebelle',
  'jocelyn',
  'jaqueline',
  'jed',
  'jabala',
  'jude',
  'jeri',
  'jess',
];

const Crew = ({ crew }) => {
  crew.forEach(obj => {
    const randomArbitrary = getRandomInt(0, names.length);
    obj.photo = `${API_PHOTO}/${names[randomArbitrary]}`;
  });

  return (
    <>
      {crew?.map((person, i) => (
        <Person key={i} photo={person.photo} name={person.name} />
      ))}
      Total crew: {crew.length} people on the ISS
    </>
  );
};

export default Crew;

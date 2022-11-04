import React from 'react';
import { useSelector } from 'react-redux';

import Person from './Person';

import styles from './Crew.module.scss';

const Crew = () => {
  const { crew, amount } = useSelector(state => state.crew);

  return (
    <div className={styles.crewContainer}>
      <div className={styles.crewList}>
        {crew?.map((person, i) => (
          <Person key={i} photo={person.photo} name={person.name} />
        ))}
      </div>
      <h5>Total crew: {amount} people on the ISS</h5>
    </div>
  );
};

export default Crew;

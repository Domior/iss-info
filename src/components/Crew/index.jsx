import React from 'react';
import { useSelector } from 'react-redux';

import Person from './Person';
import Skeleton from './Person/Skeleton';

import styles from './Crew.module.scss';

const Crew = () => {
  const { crew, amount, status } = useSelector(state => state.crew);

  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
  const crewList = crew?.map((person, i) => (
    <Person key={i} photo={person.photo} name={person.name} />
  ));

  return (
    <div className={styles.crewContainer}>
      <div className={styles.crewList}>
        {status === 'success' ? crewList : skeletons}
      </div>
      <h5>Total crew: {amount} people on the ISS</h5>
    </div>
  );
};

export default Crew;

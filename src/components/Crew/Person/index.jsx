import React from 'react';

import styles from './Person.module.scss';

const Person = ({ photo, name }) => {
  return (
    <div className={styles.personContainer}>
      <img src={photo} width={75} height={75} alt="person_photo" />
      <p>{name}</p>
    </div>
  );
};

export default Person;

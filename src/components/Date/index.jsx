import React from 'react';
import { useSelector } from 'react-redux';

import { getDate, getTime } from '../../utils/calculateTimestamp';

import styles from './Date.module.scss';

const Date = () => {
  const { timestamp } = useSelector(state => state.location);

  const date = getDate(timestamp);
  const time = getTime(timestamp);

  return (
    <div className={styles.dateContainer}>
      <p>Current UTC time: {time}</p>
      <p>Date: {date}</p>
    </div>
  );
};

export default Date;

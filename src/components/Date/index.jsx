import React from 'react';
import { useSelector } from 'react-redux';

import { getDate, getTime } from '../../utils/calculateTimestamp';

const Date = () => {
  const { timestamp } = useSelector(state => state.location);

  const date = getDate(timestamp);
  const time = getTime(timestamp);

  return (
    <>
      <div>Current UTC time: {time}</div>
      <div>Date: {date}</div>
    </>
  );
};

export default Date;

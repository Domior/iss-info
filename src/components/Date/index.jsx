import React from 'react';

import { getDate, getTime } from '../../utils/calculateTimestamp';

const index = ({ timestamp }) => {
  const date = getDate(timestamp);
  const time = getTime(timestamp);

  return (
    <>
      <div>Current UTC time: {time}</div>
      <div>Date: {date}</div>
    </>
  );
};

export default index;

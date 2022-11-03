import React from 'react';

const Person = ({ photo, name }) => {
  return (
    <div>
      <img src={photo} width={80} height={80} alt="person_photo" />
      {name}
    </div>
  );
};

export default Person;

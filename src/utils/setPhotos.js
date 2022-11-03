import { API_PHOTO } from '../constants/api';

import { getRandomInt } from '../utils/getRandomInt';

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

export const setPhoto = obj => {
  obj.forEach(item => {
    const randomArbitrary = getRandomInt(0, names.length);
    item.photo = `${API_PHOTO}/${names[randomArbitrary]}`;
  });
};

import { atom } from 'recoil';

export const requestState = atom({
    key: 'requestState', // unique ID (with respect to other atoms/selectors)
    default: {}, // default value (aka initial value)
  });
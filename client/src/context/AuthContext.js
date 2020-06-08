import { createContext } from 'react';

const noop = () => {};

export default createContext({
  token: null,
  userId: null,
  nickname: null,
  registrationDate: null,
  login: noop,
  logout: noop,
  isAuthenticated: null,
});

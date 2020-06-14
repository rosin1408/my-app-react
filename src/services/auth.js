import localforage from 'localforage';

export const TOKEN_KEY = "@my-app-Token";

export const isAuthenticated = async () => {
  const token = await localforage.getItem(TOKEN_KEY);
  return token !== null;
};

export const getToken = () => localforage.getItem(TOKEN_KEY).then(token => token);

export const login = token => localforage.setItem(TOKEN_KEY, token.accessToken)

export const logout = () => localforage.removeItem(TOKEN_KEY);
export const TOKEN_KEY = "@my-app-Token";

export const isAuthenticated = () => const token = localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY).then(token => token);

export const login = token => localforage.setItem(TOKEN_KEY, token.accessToken)

export const logout = () => localforage.removeItem(TOKEN_KEY);
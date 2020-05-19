import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "http://localhost:8080/api"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers['tenant-name'] = 'cliente_1';
  }
  return config;
});

api.interceptors.response.use((response) => {
  return response;
},(error) => {
  if (error.response.status === 401) { 
    console.log('ERRO DE AUTENTICAÇÂO')    ;
    const requestConfig = error.config;
    return axios(requestConfig);
  }
  return Promise.reject(error);
});

export default api;
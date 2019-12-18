import axios from 'axios';

export const RestAPI = axios.create({
  baseURL: 'http://eatple.com:8001/api/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

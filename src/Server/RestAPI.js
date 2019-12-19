import axios from 'axios';

const RestAPI = axios.create({
  baseURL: 'http://eatple.com:8000/api/',
  timeout: 1000,
});

export default RestAPI;

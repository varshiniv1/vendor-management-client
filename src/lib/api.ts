import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://localhost:5000/api',
  baseURL: 'https://vendor-api-gvc7.onrender.com/api',

});

export default api;

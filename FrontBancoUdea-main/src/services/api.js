import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Cambia esto según el dominio del backend
});

export default api;
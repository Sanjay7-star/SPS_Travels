import axios from 'axios';

const API = axios.create({
  baseURL: "http://localhost:5173/api",  // Ensure this matches your backend
});

export default API;

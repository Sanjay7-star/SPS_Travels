import axios from 'axios';

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Updated to 5001
  headers: { "Content-Type": "application/json" },
});

export default API;  // Export the instance as default

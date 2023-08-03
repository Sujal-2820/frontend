// axiosConfig.js
import axios from 'axios';

// Assuming you have the authentication token stored in a variable named 'token'
const token = 'your-authentication-token';

// Create a new instance of Axios
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // Your backend base URL
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;

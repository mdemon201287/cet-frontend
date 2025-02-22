// frontend/src/utils/axiosInstance.ts
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://cet-titz.onrender.com/api', // Ensure this matches your backend base URL
});

export default instance;

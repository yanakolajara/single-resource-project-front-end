import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'http://localhost:3004'
      : 'DEPLOY URL',
  timeout: 50000,
});

export default AxiosInstance;

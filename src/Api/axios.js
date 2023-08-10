import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_API_KEY
      : 'DEPLOY URL',
  timeout: 50000,
});

export default AxiosInstance;

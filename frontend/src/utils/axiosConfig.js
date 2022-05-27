import axios from 'axios';

const axiosConfig = axios.create({
   baseURL: process.env.REACT_APP_BASE_URL,
});

axiosConfig.interceptors.response.use(
   (response) => {
      if (response && response.data) {
         return response.data;
      }
      return response;
   },
   (error) => {
      throw error;
   },
);

export default axiosConfig;

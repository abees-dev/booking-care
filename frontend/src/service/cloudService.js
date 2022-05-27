import axiosConfig from '../utils/axiosConfig';

const createClouds = (data) => {
   return axiosConfig.post('/clouds', data);
};

export { createClouds };

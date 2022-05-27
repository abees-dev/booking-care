import axiosConfig from '../utils/axiosConfig';

const getAllDoctor = (limit) => {
   return axiosConfig.get('/user/doctor', {
      params: {
         limit: limit,
      },
   });
};
export { getAllDoctor };

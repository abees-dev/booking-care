import axiosConfig from '../utils/axiosConfig';

const getUser = () => {
   return axiosConfig.get('/auth/get-all-users');
};

const createUser = (data) => {
   return axiosConfig.post('/auth/create-new-user', {
      ...data,
   });
};
const deleteUser = (id) => {
   return axiosConfig.delete('/auth/delete-user', {
      params: {
         id,
      },
   });
};
const updateUser = (data, id) => {
   return axiosConfig.post(`/auth/edit-user?id=${id}`, {
      ...data,
   });
};

export { getUser, createUser, deleteUser, updateUser };

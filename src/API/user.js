import instance from "./http";

// export const loginRequest = async (user) => {
//   try {
//     const response = await instance.post('/auth/login', user);
//     return response.data;
//   } catch (error) {
//     return Promise.reject(error.response.data);
//   }
// };

export const refreshTokenRequest = async () => {
  try {
    const response = await instance.post('/auth/refresh-token');
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};
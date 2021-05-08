import { get, post } from 'axios';
import FormData from 'form-data';

export const useUser = () => {
  const getUser = async (id) => {
    const params = new URLSearchParams([['id', id]]);
    try {
      const { data } = await get(`${process.env.REACT_APP_API_URL}/user`, { params });
      return data;
    } catch (e) {
      console.error(e);
    }
  };
  const uploadAvatar = async (image) => {
    try {
      const formData = new FormData();
      const config = { headers: { 'content-type': 'multipart/form-data' } };
      formData.append('image', image, image.name);
      const {
        data: { path },
      } = await post(`${process.env.REACT_APP_API_URL}/image`, formData, config);
      return path;
    } catch (e) {
      console.error(e);
    }
  };
  return {
    getUser,
    uploadAvatar,
  };
};

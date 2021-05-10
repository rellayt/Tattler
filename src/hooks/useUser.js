import axios from 'axios';
import FormData from 'form-data';

export const useUser = () => {
  const getUser = async (id) => {
    const params = new URLSearchParams([['id', id]]);
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/user`, { params });
      return data;
    } catch (e) {
      console.error(e);
    }
  };

  const uploadAvatar = async (dispatch, image) => {
    try {
      const formData = new FormData();
      const config = { headers: { 'content-type': 'multipart/form-data' } };
      formData.append('image', image, image.name);
      const {
        data: { user },
      } = await axios.post(`${process.env.REACT_APP_API_URL}/image`, formData, config);
      dispatch({ type: 'USER_UPDATE', payload: { user } });
    } catch (e) {
      console.error(e);
    }
  };

  const deleteAvatar = async (dispatch) => {
    try {
      const {
        data: { user },
      } = await axios.delete(`${process.env.REACT_APP_API_URL}/image`);
      dispatch({ type: 'USER_UPDATE', payload: { user } });
    } catch (e) {}
  };
  return {
    getUser,
    uploadAvatar,
    deleteAvatar,
  };
};

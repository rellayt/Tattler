import axios from 'axios';
import FormData from 'form-data';

export const useUser = () => {
  const getUser = async (id, options = {}) => {
    const { information = '', lastMessages = '', commonRoom = '', totalMessages = '' } = options;
    const params = new URLSearchParams([
      ['id', id],
      ['info', information],
      ['last_messages', lastMessages],
      ['common_room', commonRoom],
      ['total_messages', totalMessages],
    ]);
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/user`, { params });
      return data;
    } catch (e) {
      const mute = e;
      console.log('asd');
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
      dispatch({ type: 'USER_UPDATED', payload: { user } });
    } catch (e) {
      const mute = e;
      console.log('asd');
      // console.error(e);
    }
  };

  const deleteAvatar = async (dispatch) => {
    try {
      const {
        data: { user },
      } = await axios.delete(`${process.env.REACT_APP_API_URL}/image`);
      dispatch({ type: 'USER_UPDATED', payload: { user } });
    } catch (e) {
      console.error(e);
    }
  };
  return {
    getUser,
    uploadAvatar,
    deleteAvatar,
  };
};

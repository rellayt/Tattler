import { useCallback } from 'react';
import axios from 'axios';

export const usePublicChannel = () => {
  const sendMessage = async (channelId, message) => {
    try {
      const {
        data: { messages },
      } = await axios.post(`${process.env.REACT_APP_BASE_URL}/public_messages`, { channelId, message });
      return messages;
    } catch (e) {
      console.log(e);
    }
  };

  const getPublicMessages = useCallback(async (channel) => {
    try {
      const {
        data: { messages },
      } = await axios.get(`${process.env.REACT_APP_BASE_URL}/public_messages`, { params: { channel } });
      return messages;
    } catch (e) {
      console.log(e);
    }
  }, []);
  return {
    sendMessage,
    getPublicMessages,
  };
};

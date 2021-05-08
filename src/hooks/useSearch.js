import { get } from 'axios';

export const useSearch = () => {
  const searchUsers = async (query) => {
    const params = new URLSearchParams([['q', query]]);
    try {
      const { data } = await get(`${process.env.REACT_APP_API_URL}/user_search`, { params });
      return data;
    } catch (e) {
      console.error(e);
    }
  };
  return {
    searchUsers,
  };
};

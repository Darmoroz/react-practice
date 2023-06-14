import axios from 'axios';

const postAPI = axios.create({ baseURL: 'https://taupe-croissant-c4162a.netlify.app/api' });

export const getPosts = async (params = {}) => {
  const { data } = await postAPI.get('/posts', {
    params: {
      limit: 12,
      ...params,
    },
  });
  return data;
};

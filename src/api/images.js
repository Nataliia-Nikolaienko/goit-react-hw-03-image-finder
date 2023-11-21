import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '31977290-c776c8f5c96464145496dafee';

export const getImagesWithSearch = async query => {
  const { data } = await axios(
    '/?q=' +
      query +
      '&page=1&key=' +
      API_KEY +
      '&image_type=photo&orientation=horizontal&per_page=12'
  );
  return data;
};

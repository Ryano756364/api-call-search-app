import axios from 'axios';

const searchImages = async (searchTerm) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID Kn_PxSGKJ8Ft-uz-OKImHZSPYP7tGguVcW-kth8PDzI'
    },
    params: {
      query: searchTerm,
    }
  });
  return response.data.results; //returns array of images coming back from api
};

export default searchImages;

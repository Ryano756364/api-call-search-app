// Represent all the code related to API
import axios from 'axios';

// async and await -> wait for the reponse back before JS runs next line of code
const searchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    //This is what identifies us with who we are requesting from
    headers: {
      Authorization: 'Client-ID Kn_PxSGKJ8Ft-uz-OKImHZSPYP7tGguVcW-kth8PDzI'
    },
    params: {
      //The image we are searching for - aka what get's typed (hardcoding for now to test)
      query: 'dogs'
    }
  });

  console.log(response); //Make sure we are getting back data from API
  return response;
};

export default searchImages;

import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import {useState} from 'react';

function App(){

  const [images, setImages] = useState([]);  //Creating a piece of state called images

  const onHandleSubmit = async (term) => {
    const results = await searchImages(term);  //After doing a search we want to update content on the screen in ImageList.js
    setImages(results);
  };

  return (
    <div>
      <SearchBar onSubmit={onHandleSubmit}/>
      <ImageList images={images}/>
    </div>
  )
}

export default App;

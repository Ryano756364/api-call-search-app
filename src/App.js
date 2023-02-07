import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import {useState} from 'react';

function App(){
  
  const [images, setImages] = useState([]); 

  const onHandleSubmit = async (term) => {
    setImages(await searchImages(term));  
  };

  return (
    <div>
      <SearchBar onSubmit={onHandleSubmit}/>
      <ImageList images={images}/>
    </div>
  )
}

export default App;

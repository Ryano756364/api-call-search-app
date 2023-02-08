import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import {useState} from 'react';
import './App.css';

function App(){

  const [images, setImages] = useState([]); 

  const onHandleSubmit = async (term) => {
    setImages(await searchImages(term));  
  };

  return (
    <div className="app">
      <div>
        <h1>Image API Project </h1>
        <h2>Please enter for an image you'd like to search and press enter</h2>
      </div>
      <SearchBar onSubmit={onHandleSubmit}/>
      <ImageList images={images}/>
    </div>
  )
}

export default App;

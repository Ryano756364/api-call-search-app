import searchImages from "./api";
import SearchBar from "./components/SearchBar";

function App(){
  const onHandleSubmit = (term) => {
    searchImages(term);
  };

  return (
    <div>
      <SearchBar onSubmit={onHandleSubmit}/>
    </div>
  )
}

export default App;

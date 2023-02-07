import searchImages from "./api";
import SearchBar from "./components/SearchBar";

function App(){
  const onHandleSubmit = async (term) => {
    const results = await searchImages(term);
    console.log(results);
  };

  return (
    <div>
      <SearchBar onSubmit={onHandleSubmit}/>
    </div>
  )
}

export default App;

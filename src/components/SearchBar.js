import './SearchBar.css';

function SearchBar(props){

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(

    )
  };

  return (
    <div>
        <form onSubmit={handleFormSubmit}>
          <input />
        </form>
    </div>
  )
}

export default SearchBar;

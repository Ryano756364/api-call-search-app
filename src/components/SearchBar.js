import './SearchBar.css';
import {useState} from 'react';

function SearchBar(props){
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(term);
  };
  

  const handleChange = (event) => {  
    setTerm(event.target.value); 
  }

  return (
    <div className='search-bar'>
        <form onSubmit={handleFormSubmit}>
          <input value={term} onChange={handleChange} placeholder="Search For Image and Press ENTER" />
        </form>
    </div>
  )
}

export default SearchBar;

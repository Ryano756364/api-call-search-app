import './SearchBar.css';
import {useState} from 'react';  //Step 1

function SearchBar(props){
  const [term, setTerm] = useState(''); //Step 1

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(term); //Step 6 -> pass to parent
  };

  const handleChange = (event) => {  //Step 2
    setTerm(event.target.value); //Step 3
    //Step 4 -> update state
  }

  return (
    <div>
        <form onSubmit={handleFormSubmit}>
          <input value={term} onChange={handleChange} placeholder="Search For Image" />  {/* Step 2 */}
          {/* Step 5 -> add value with term */}
        </form>
    </div>
  )
}

export default SearchBar;

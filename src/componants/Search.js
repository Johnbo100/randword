import React, { useState } from 'react';
import data from './dictionary.json'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [result,setResult]=useState([])

  const filterData =()=>{
    searchTerm !== null && data.map((item) => {
        if(item.word === searchTerm) setResult(result => [...result, item.definition])
  })}
  

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}
      />
     

      <button onClick={filterData}>search word</button>
      {result !== null && result.map((item) => (
          <div><b>Definition:</b>{item}</div>
        ))}
       
    </div>
  );
};

export default Search;

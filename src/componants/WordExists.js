import { useEffect, useState } from "react";
import data from './dictionary.json'


const WordExists = ({word}) => {
    const [result, setResult] = useState([]);
  
    useEffect(() => {
      const filterData = () => {
        if (word !== null) {
          const filtered = data.filter(item => item.word === word);
          setResult(filtered);
        }
      }
      filterData();
    }, [word])
  
    return (
      <div>
        <ul>
          {result.map(item => (
            <li key={item.word}>{item.word}: {item.definition}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default WordExists;
 
  
  
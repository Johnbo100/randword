import React, { useState, useEffect,useRef } from "react";
import { Header } from "./componants/Header";
import "./App.css";
import Definition from "./componants/Definition";
import Search from "./componants/Search";
import Loader from "./componants/Loader"



let alphabet = [...Array(26).keys()].map((i) => String.fromCharCode(i + 97));
console.log(alphabet);

function App() {
  const [numAuto, setNumAuto] = useState(5);
  const [word, setWord] = useState([]);
  const [words, setWords] = useState(null);
  const [status, setStatus] = useState("");
  const[showloading,setShowloading]=useState(false)

  

  
 
  function permute(input) {
    const result = [''];
    setTimeout(() => setShowloading(true), 10);
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      const tempResult = [];
      
      for (let j = 0; j < result.length; j++) {
        const permutation = result[j];
        
        for (let k = 0; k <= permutation.length; k++) {
          tempResult.push(permutation.slice(0, k) + char + permutation.slice(k));
        }
      }
      
      result.splice(0, result.length, ...tempResult);
    }
    setWords(result)
    setTimeout(() => setShowloading(false), 10);
    return result;
  }


  const handleClick = (e) => {
    e.preventDefault();
    setWords([]);
    setStatus("Busy");
 
    permute(word);
    
  };

  const autogen = () => {
    let text = [];
    for (var i = 0; i < numAuto; i++)
      text.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
    console.log("This is the text value" + text);
    setWord(text.join("").toString());
  };



  return (
    <div className="App">
      {showloading && <Loader />}
      <Header />
      <Definition />
      <Search />
      <div id="letterInput">
        <input
          type="text"
          placeholder="Type in your letters"
          id="Letters"
          value={word}
        />
      </div>

      <div id="controlsWrapper">
        <input
          type="number"
          id="numLetters"
          value={numAuto}
          onChange={(e) => setNumAuto(e.target.value)}
        />
        
        {status}
        <button onClick={autogen} id="numletbtn">
          Auto Generate
        </button>
      </div>
      <div>
        <button onClick={handleClick} id="poscombtn">
          Possible combinations
        </button>
      </div>
      <div className="words">
        {words !== null && words.map((sword) => (
          <li>{sword}</li>
        ))}
      </div>
      
    </div>
  );
}

export default App;

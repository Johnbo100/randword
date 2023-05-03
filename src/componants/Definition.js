import React, { useState,useEffect } from 'react'
import axios from 'axios'

const Definition = () => {

    const[word,setWord]=useState(null)
    const[inword,setInword]=useState(' ')

   

      const getdata = async ()=>{
        try {    
          const res = await axios(`https://api.dictionaryapi.dev/api/v2/entries/en/${inword}`);
          setWord(res.data);
          console.table(word)
        } catch (error) {
          console.log("there is an error in axios :"+error)
        }
      }

      
  return (
    <div className='definition'>
       
        Definition

        <input type='text'onChange={(e)=>setInword(e.target.value)}/>
        <button onClick={getdata} >Definition</button>
         
        
        {word !== null && word.map(res=>res.meanings.map(m=>m.definitions.map((def, id)=>(
            <div className="meanings" key={id}> {def.example} </div>
        ))))}
        {word !== null && word.map(res=>res.meanings.map(m=>m.definitions.map((def, id)=>(
            <div key={id}> {def.synonyms} </div>
        ))))}
        
    </div>
    )}
export default Definition
import React, {useEffect, useState, useRef} from "react";
const Counter = () => {

    const prevCount = useRef(0);
    const [counter, setCounter] = useState(0);
    useEffect(() => {
      console.log('counter:', counter, 'prevCount:', prevCount.current);
    }, [prevCount, counter]);
  
    return (
      <div className="App">
        <p>{counter}</p>
        <button
          onClick={() => {
            setCounter(counter => {
              prevCount.current = counter; // store previous value in prevCount
              return counter + 1; // increment
            });
          }}
        >
          Increment counter
        </button>
      </div>
    );
  };
  export default Counter
import React, { useEffect, useRef, useState } from "react";

const useReffHook = () => {
  const [value, setValue] = useState(0);
  // const [count, setCount] = useState();
  //useState(0) = 0 lakhsu to infinite loop ma chaaliyu jsse

  const count = useRef(0);

  /*
    useRef Object return kree with property current:value
    
    */

  useEffect(() => {
    // setCount(count + 1);
    count.current = count.current + 1;
  });

  // ==================================
  const InputElement = useRef();

  const handleClick = () => {
      InputElement.current.focus();
    InputElement.current.style.background = "blue";
  }

  return (
    <>
      <button onClick={() => setValue((prev) => prev + 1)}>
        Increment By 1
      </button>
      <h1>Value:{value}</h1>
      <button onClick={() => setValue((prev) => prev - 1)}>
        Decrement By 1
      </button>
      <h1>Render Count:{count.current}</h1>

      <input type="text" ref={InputElement} />
      <button onClick={handleClick}>Submit</button>
    </>
  );
};

export default useReffHook;

/*

 it create a mutable variable which will not re-render the components

 atyaare sudhi jetli vaar pnn variable change thataa ta etli vaar aakha aakha component rerender thataa ta
UseRef Thi nai thsseeeeee


 Used to access the DOM element directly



*/

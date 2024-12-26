import { useState, useMemo } from "react";

const MemoHook = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  function cubeNum(num) {
    console.log("function executed");
    return Math.pow(num, 3);
  }

  const result = useMemo(() => cubeNum(number), [number]);
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h1>Cube of the number:{result}</h1>

      <button onClick={() => setCount(count + 1)}>Counter++{count}</button>
      {/*
       this will rerender the web page so when the page is re rendered, it's calling cubeNum Funtion
        to prevent that we use memo
      */}
    </>
  );
};

export default MemoHook;

/*
The React useMemo Hook returns a Memoized value.(It's like a caching value so that it doesn't need to be recalculated)

It only runs when one of it's dependecies get updated.
this can imporove the performance of the application.

there is another hook that imporove the performance ==> useCallback Hook

useMemo & useCallback hook are the same, the main difference is:
=> useMemo hook returns a Memoized Value.
=>useCallback hook ruturns a Memoized Function.


*/

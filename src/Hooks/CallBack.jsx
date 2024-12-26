import { useCallback, useState } from "react";
import Header from "../components/Header";

const CallBack = () => {
  const [count, setCount] = useState(0);

  const newFunc = () => {}

    // const newFunc = useCallback(
    //   () => {},
    //   [],
    // )
    // it will not create new funtion it will just cached the funtion
    
    // const newFunc = useCallback(
    //   (count) => {},
    //   [count],
    // ) 
    //it will create new funtion when count state changes
    
  return (
    <>
      <Header newFunc={newFunc} />
      {/* because of passing funtion it will re render the component again on counting ++ 
        this is happening because of referencial equality
        const f1 =() => "hello"
        const f2 =() => "hello"

        f1 === f2 // false
        because both the funtion is have been created on different memory location 
        so when we re render this component it creates a new instance of this funtion 
        so every time we are passing a new funtion
      */}
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Count ++</button>
      {/* whenever we will click on button it will again re render the Header component */}
    </>
  );
};

export default CallBack;

/*
useCallbackHook is a react hook that let's you cache a function definition between re-renders
It means, When we use the hook, it does'nt create multiple instance of some function when re-render happens.

instead of creating new instance of the function, it provides the cached funtion on re-render of the component.


*/

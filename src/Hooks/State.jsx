import { useState } from "react";

const UseStateHook = () => {

  const [car, setCar] = useState({
    brand:"Ferrari",
    model:"Roma",
    color:"red",
    year:"2023"
  });

  // const [color, setColor] = useState("Red");

  const handleChangeColor1 = () => {
    setCar((prev) =>{
      return {...prev,color:"Blue"};
    });
  };
  const handleChangeColor2 = (color = "Blue") => {
    setCar((prev) => {
      return { ...prev, color: color };
    });
  };

  return (
    <>
      <h1>This is my Car {car.brand} with model {car.model}.</h1>
      <h2>My Car Color is {car.color}</h2>

      <button onClick={handleChangeColor1}>Blue</button>
      <button onClick={() => handleChangeColor2("Yellow")}> yellow</button>
    </>
  );
};

export default UseStateHook;

/*

Syntax:-
const [state Variable , Updated Function] = useState(initialValue);


Ex:-
const [count , setCount] = useState("krutik");



*/

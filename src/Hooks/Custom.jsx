import React, { useEffect, useState } from "react";
import useUserDefinedHook from "./useUserDefinedHook";

const Custom = () => {
 const [name , setName] = useUserDefinedHook("username","")
 const [id , setId] = useUserDefinedHook("userid","")
  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Hellow, {name}!!!!</h2>

      <input
        type="text"
        placeholder="Enter Your Name"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
    </>
  );
};

export default Custom;

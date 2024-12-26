import React, { useEffect, useState } from 'react'

const useEffectHook = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      
    setTimeout(() => {
        setCount(count => count+1);
    }, 2000);
      
    }, [])
    
  return (
    <>
        <h1> It will Render {count} times</h1>
    </>
  )
}

export default useEffectHook
/*

Syntax:-

useEffect(() =>{
    this is call back function , we write side effect code
} ,[Array dependency___optional ]);


Case 1: No dependency Passed

    useEffect(() =>{
        Runs On Every Render
        runs whenever the components any state changes
    });


Case 2: An Empty Array

    useEffect(() =>{
            Runs Only On First Render , when component load
    },[]);


Case 3:Props Or State Values

    useEffect(() =>{
            Runs  On First Render    //pella ekvaar to run thsse jj
            Run EveryTime Any Dependency Value Changes       //pachi jetli vaar prop,state change thasee etli vaar run krrse

    },[prop , state]);



*/




import React, { useEffect, useLayoutEffect } from 'react'

const LayoutEffect = () => {

    useEffect(() => {
      console.log("mesg from useeffect");
    }, [])

    useLayoutEffect(() => {
      console.log("mesg from useLayout effect");
    }, [])

    // ?Order
    // 1. layouteffect
    // 1. h2 ui element
    // 1. useeffect
    
  return (
    <>
    <h2>this is ui element</h2>
    </>
  )
}

export default LayoutEffect


/**

useLayoutEffect works similarly to useEffect,but it is called before the user interface gets mounted.

useEffect gets called after printing the DOM elements.
useLayoutEffect gets called before printing the DOM elements.




 */
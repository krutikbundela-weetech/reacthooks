import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Contact = () => {

    const phone = useContext(AppContext);
  return (
    <>
    <h1>Contact</h1>
    phone:{phone}
    </>
  )
}

export default Contact
import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export default function ButtonComp({buttonText, buttonFunc, buttonData}) {

  const navigate = useNavigate()

  useEffect(() => {
    if (buttonText === 'Edit User') {
      sessionStorage.clear()
    }
  }, [])
  //Add or edit user
  const handleClickButton = async() => {
    const {msg} = await buttonFunc(buttonData) 
    alert(`This user ${msg} success`)     
    navigate('/')     
  }

  return (
    <button onClick={handleClickButton}>{buttonText}</button>
  )
}

import React, { useEffect, useState } from 'react'
import AddVaccinationForm from '../Components/AddVaccinationForm'

export default function AddVaccination({ newUser, setNewUser}) {
  return (
    <div>
        {/* Sends the details about the user to the vaccine */}
        {<AddVaccinationForm newUser={newUser} setNewUser={setNewUser}/>}
    </div>
  )
}

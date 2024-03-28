import React, { useEffect, useState } from 'react'
import { deleteUser } from "../Utils/userUtils";
import { useNavigate } from 'react-router-dom';

//All the menipulations on the user
export default function OneUser({user, setIsDeleted}) {

    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(false)

    const remove = async() => {
        const {msg} = await deleteUser(user._id)
        console.log(msg)
        setIsDeleted(true)
        location.reload();
    }

    const edit = async() => {
      const serializedUser = JSON.stringify(user);
      sessionStorage.setItem("editUser", serializedUser)
      navigate('/edit-user')
  }

  return (
    <div style={{border: '1px solid gray', margin: 3}}>
        name: {user.firstname} {user.lastname}
        <br/>
        <div style={{display: isVisible ? 'flex' : 'none'}}>
            phone: {user.phone} <br/>
            mobilPhone: {user.mobilePhone} <br/>
            Date_of_receiving_positive_answer: {user.Date_of_receiving_positive_answer} <br/>
            dateOfRecovery: {user.dateOfRecovery} <br/>
            address: {user.address}<br/>
            korona: 
            {/* Showing details about the vaccinations */}
            {user.Korona && user.Korona.length > 0 ? (
            user.Korona.map((vaccination) => (
            <div key={vaccination._id}>
            date_of_receipt_of_vaccination: {vaccination.date_of_receipt_of_vaccination}<br/>
            the_manufacturer_of_the_vaccination:{vaccination.the_manufacturer_of_the_vaccination}<br/>
            <hr />
          </div>
    ))
  ) : (
    <p>No vaccination records found.</p>
  )}
        </div>
        <button onClick={() => setIsVisible(!isVisible)}>see/not see more details</button>
        <button onClick={remove}>delete User</button>
        <button onClick={edit}>Edit User</button>
    </div>
  )
}

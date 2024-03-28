import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ButtonComp from "./ButtonComp";
import { addUser, updateUser } from "../Utils/userUtils";

import Alert from '@mui/material/Alert';
import AddVaccination from "./AddVaccination";

export default function FormComp({ }) {

  const [newUser, setNewUser] = useState({});
  const [text, setText] = useState('add');
  const [errors, setErrors] = useState({})
  const [vaccinationsOfUser, setVaccinationsOfUser] = useState([])
  

  useEffect(() => {
    const userEdit = sessionStorage.getItem('editUser')
    const finalUser = JSON.parse(userEdit)
    if (finalUser) {
      setNewUser(finalUser)
      setText('edit')
      setVaccinationsOfUser(finalUser.Korona)
    }
    else {
      setText('add')
      sessionStorage.clear()
      setNewUser({Korona: vaccinationsOfUser})
      }
  }, [])

//validations
  const handleCheckValidation = () => {
    let errorsObj = {};
    if (!newUser.firstname || !newUser.firstname === "") {
      errorsObj.firstName = "First name is required";
    } 
    if (!newUser.lastname || !newUser.lastname === "") {
      errorsObj.lastName = "Last name is required";
    } 
    if (!newUser.address || !newUser.address === "") {
      errorsObj.address = "Addresss required";
    } 
    if (!newUser.phone || newUser.phone.length<9) {
      errorsObj.phone = "Phone uncorrect";
    } 
    if (!newUser.id || newUser.id.length<9) {
      errorsObj.id = "ID uncorrect";
    } 
    if (Object.keys(errorsObj).length > 0) {
      setErrors(errorsObj);
    } else {
      setErrors({});
    }
  }
  useEffect(() => {
    handleCheckValidation()
  }, [newUser]);
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
  }
  return (
    //the form with all the user details
    <Box
      onSubmit={handleFormSubmit}
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="First Name"
        variant="standard"
        name="Name"
        error={!!errors.firstName}
        helperText={errors.firstName}
        InputLabelProps={{ shrink: true }}
        value={newUser?.firstname}
        onChange={(e) => {
        setNewUser({ ...newUser, firstname: e.target.value });
        }}
      />
      <TextField
        id="outlined-number"
        label="Last Name"
        variant="standard"
        error={!!errors.lastName}
        helperText={errors.lastName}
        value={newUser?.lastname}
        onChange={(e) => {
          setNewUser({ ...newUser, lastname: e.target.value });
        }}
      />
      <TextField
        id="standard-basic"
        label="ID"
        variant="standard"
        error={!!errors.id}
        helperText={errors.id}
        InputLabelProps={{ shrink: true }}
        value={newUser?.id}
        onChange={(e) => {
          setNewUser({ ...newUser, id: e.target.value });
        }}
      />
      <TextField
        id="standard-basic"
        label="phone"
        variant="standard"
        error={!!errors.phone}
        helperText={errors.phone}
        InputLabelProps={{ shrink: true }}
        value={newUser?.phone}
        onChange={(e) => {
          setNewUser({ ...newUser, phone: e.target.value });
        }}
      />
      <TextField
        id="standard-basic"
        label="mobilePhone"
        variant="standard"
        error={!!errors.mobilePhone}
        helperText={errors.mobilePhone}
        InputLabelProps={{ shrink: true }}
        value={newUser?.mobilePhone}
        onChange={(e) => {
          setNewUser({ ...newUser, mobilePhone: e.target.value });
        }}
      />
      <TextField
        id="standard-basic"
        label="address"
        variant="standard"
        error={!!errors.address}
        helperText={errors.address}
        InputLabelProps={{ shrink: true }}
        value={newUser?.address}
        onChange={(e) => {
          setNewUser({ ...newUser, address: e.target.value });
        }}
      />
      <TextField
        id="standard-basic"
        label="Date of receiving positive answer"
        variant="standard"
        value={newUser?.Date_of_receiving_positive_answer}
        onChange={(e) => {
          setNewUser({
            ...newUser,
            Date_of_receiving_positive_answer: e.target.value,
          });
        }}
      />
      <TextField
        id="standard-basic"
        label="date Of Recovery"
        variant="standard"
        value={newUser?.dateOfRecovery}
        onChange={(e) => {
          setNewUser({ ...newUser, dateOfRecovery: e.target.value });
        }}
      />
      <AddVaccination newUser={newUser} setNewUser={setNewUser}/>
     
      {Object.keys(errors).length > 0 ?//There is an error
        (<Alert severity="error">The details are uncorrect</Alert>) : (
          <>
            {text !== "add" ? (
              <ButtonComp
                buttonText={"Edit User"}
                buttonFunc={updateUser}
                buttonData={newUser}
              />
            ) : (
              <ButtonComp
                buttonText={"Add User"}
                buttonFunc={addUser}
                buttonData={newUser}
              />
            )}
          </>)}
    </Box>

  );
}



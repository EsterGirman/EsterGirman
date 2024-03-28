import React, { useEffect, useState } from "react";
import { getAllVaccinations } from "../Utils/vaccinationUtils";
import Alert from '@mui/material/Alert';

export default function AddVaccinationForm({ newUser, setNewUser }) {
    const [allVaccinations, setAllVaccinations] = useState([]);
    const [noMoreVaccinations, setNoMoreVaccinations] = useState(false);
    const fetchData = async () => {
    const { vaccinations } = await getAllVaccinations();
    setAllVaccinations(vaccinations);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    if (newUser.Korona.length < 4) {//There are less then 4 v
      setNewUser({ ...newUser, Korona: [...newUser.Korona, e.target.value] });
    } else {
        setNoMoreVaccinations(true)
    }
    console.log(newUser);
  };

  return (
    <div>
      <h1>Vaccination</h1>
      {!noMoreVaccinations && <select onChange={handleChange}>
        {allVaccinations.map((vaccination) => (
          <option key={vaccination._id} value={vaccination._id}>
            code: {vaccination._id} manufactur:{" "}
            {vaccination.the_manufacturer_of_the_vaccination} date:{" "}
            {vaccination.date_of_receipt_of_vaccination}
          </option>
        ))}
      </select>}
      {noMoreVaccinations && <Alert sx={{width: 'max-content'}} severity="error">No more vaccines can be added</Alert>}
    </div>
  );
}

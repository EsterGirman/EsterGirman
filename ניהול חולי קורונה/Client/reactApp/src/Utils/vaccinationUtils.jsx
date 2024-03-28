import axios from "axios";
//The connection to the server
const url = "http://localhost:8000/vaccinations";

const getAllVaccinations = async () => {
  const { data } = await axios.get(url);
  return data;
};

const getVaccinationById = async (id) => {
  const { data } = await axios.get(`${url}/${id}`);
  return data;
};

const addVaccination = async (vaccination) => {
  const { data } = await axios.post(url, vaccination);
  return data;
};

const updateVaccination = async (id, vaccination) => {
  const { data } = await axios.put(`${url}/${id}`, vaccination);
  return data;
};


const deleteVaccination = async (id) => {
  const { data } = await axios.delete(`${url}/${id}`);
  return data;
};


export {
  getAllVaccinations, getVaccinationById, addVaccination, updateVaccination, deleteVaccination
};

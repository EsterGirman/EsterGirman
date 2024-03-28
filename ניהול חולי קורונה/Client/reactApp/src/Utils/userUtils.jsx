import axios from "axios";
//The connection to the server
const url = "http://localhost:8000/users";

const getAllUsers = async () => {
  const { data } = await axios.get(url);
  return data;
};

const getUserById = async (id) => {
  const { data } = await axios.get(`${url}/${id}`);
  return data;
};

const addUser = async (Data) => {
  const { data } = await axios.post(url, Data);
  return data;
};

const updateUser = async (Data) => {
  const { data } = await axios.put(`${url}/${Data._id}`, Data);
  return data;
};


const deleteUser = async (id) => {
  const { data } = await axios.delete(`${url}/${id}`);
  return data;
};


export {
  getAllUsers, getUserById, addUser, updateUser, deleteUser
};

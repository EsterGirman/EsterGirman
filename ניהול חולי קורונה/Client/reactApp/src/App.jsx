import React from "react";
import UsersPage from "./Pages/UsersPage";
import { Routes, Route } from "react-router-dom";
import AddEditUser from "./Pages/AddEditUser";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UsersPage />}></Route>
        <Route path="/add-user" element={<AddEditUser />}></Route>
        <Route path="/edit-user" element={<AddEditUser />}></Route>
      </Routes>
    </div>
  )
}

export default App;

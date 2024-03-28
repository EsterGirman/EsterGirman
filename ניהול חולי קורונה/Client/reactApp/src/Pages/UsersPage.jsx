import React, {useState, useEffect} from 'react'
import { getAllUsers } from "../Utils/userUtils";
import OneUser from '../Components/OneUser';
import { useNavigate } from "react-router-dom";

export default function UsersPage() {

    const [allUsers, setAllUsers] = useState([])
    const [isDeleted, setIsDeleted] = useState(false)
    const navigate = useNavigate()

    const fetchData = async() => {
        const {users} = await getAllUsers()
        setAllUsers(users)
    }
    
    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        setIsDeleted(false)
    }, [isDeleted])

  return (
    <div>
        <h1>All Users</h1>
        {/* return list of the users */}
        {allUsers?.map((user) =>
            <OneUser user={user} setIsDeleted={setIsDeleted}/>
        )}
        <button onClick={() => navigate("/add-user")}>Add User</button>
    </div>
  )
}

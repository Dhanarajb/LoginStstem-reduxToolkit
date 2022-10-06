import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import userSlice, { logout, selectUser } from '../features/userSlice';
import './Logout.css'
const Logout = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    const handleLogout=(e)=>{
        e.preventDefault();
       
        dispatch(logout())
    }
  return (
    <div className='logout'>
        <h1>Welcome <span className='user'>{user.name}</span></h1>
        <button className='logout-btn' onClick={(e)=>handleLogout(e)}>Logout</button>
    </div>
  )
}

export default Logout
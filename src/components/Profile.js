import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      
      <ul>
        <Link to="details"><li className='btn btn-primary'>Profile Details</li></Link>
      
        <Link to="reset-password"><button className='btn btn-warning' >Reset Password</button></Link>
    </ul>
    <Outlet/>
    </div>
    
    
  )
}

export default Profile
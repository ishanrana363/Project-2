import React, { useContext } from 'react'
import { userContext } from '../Context/usecontext'
import Home from './Home'


const Logout = () => {
  
  const {setisLogin} = useContext(userContext)
  return (
    <div>
    <Home></Home>
      <button onClick={()=>{setisLogin(false)}} >Logout</button>
    </div>
  )
}

export default Logout
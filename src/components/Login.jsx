
import { useContext } from 'react';
import Logout from "./Logout";
import "./style.css"
import { userContext } from '../Context/usecontext';


const Login = () => {
   userContext

    const {isLogin,setisLogin,name,setname,email,setemail,password,setPassword} = useContext(userContext)
    const loginhandeler = (e) =>{
        e.preventDefault()
        if(name !== "" && email !=="" && password !== "" ){
            setisLogin(true)
        }else{
            alert("Sorry fail to login")
        }
    }
    const namehandeler = (event) =>{
        setname(event.target.value)
    }
    const emailhandeler = (event) =>{
        setemail(event.target.value)
    }
    const passhandeler = (event) =>{
        setPassword(event.target.value)
    }
  return (
    <div>
        { !isLogin ? 
            (<form action="">
        <h1>Login Form</h1>
            <div className="inputb">
                <label htmlFor="name">name</label>
                <input type="text" value={name} name="name" id="" onChange={namehandeler} /> <br />
            </div>
            <div className="inputb">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onChange={emailhandeler}  />
            </div>
            <div className="inputb">
                <label htmlFor="password">Password</label>
                <input type="password" value={password} name="password" onChange={passhandeler}/>
            </div>
            <div className="inputb">
                <button className="btn btn1" onClick={loginhandeler} >Login</button>
            </div>
        </form>) : <Logout/>
        }
    </div>
  )
}

export default Login
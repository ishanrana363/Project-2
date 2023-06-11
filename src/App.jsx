import { useState } from 'react';
import { userContext } from './Context/usecontext';
import Child from './components/Child'
const App = () => {
  const [isLogin,setisLogin] = useState(false);
  const [name,setname] = useState("");
  const [email,setemail] = useState("");
  const [password,setPassword] = useState("");
  const data = {isLogin,setisLogin,name,setname,email,setemail,password,setPassword}
  return (
    <userContext.Provider value={data} >
    <div>
        <Child/>
        
    </div>
    </userContext.Provider>
  )
}

export default App

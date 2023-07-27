import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginuser } from './usereducer'


function Login() {
  // const {Name}=useSelector(state=>state.useres.data)
  const dispatch=useDispatch()
 const [name, setname] = useState("")
  const [Email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [conformpassword, setconformpassword] = useState("")
  function logininfo() {
    const newuser = {
     name:name,
     Email: Email,
     password: password,
     conformpassword: conformpassword
    }
  dispatch(loginuser(newuser))
    
  }
  
   return (
     <div>
       {/* <h3>Welcome {Name}</h3> */}
          <form>
              <input type='text' placeholder='Enter the Name' value={name} onChange={(e)=>setname(e.target.value)} ></input><br></br>
              <input type='Email' placeholder='Enter the Email'value={Email} onChange={(e)=>setemail(e.target.value)}  ></input><br></br>
              <input type='Password' placeholder='Enter the password' value={password} onChange={(e)=>setpassword(e.target.value)} ></input><br></br>
              <input type='password' placeholder='conform the password' value={conformpassword} onChange={(e)=>setconformpassword(e.target.value)}></input><br></br>
              <div>
                  <button onClick={logininfo}>Log In</button>
              </div>
          </form>
    </div>
  )
}

export default Login;
import React, { useState } from "react";

function Login() {
//   const [userName, setUser] = useState(" ");
//   const [userEmail,setEmail]=useState(" ");
//   const [userNumber,setNumber]=useState(" ");
//   const [userAddress,setAddress]=useState(" ");
  
 const [userData,setUserData]=useState({
  userName:'',
  userEmail:'',
  userAddress:'',
  userAge:''
 })
 
 const getData=()=>{
  console.log(userData);
 }

  return (
    <div className="Login-form">
      <h2>Login Form Page</h2>
      <form action="" className="Second-form" >
        
          <label htmlFor=""> Enter the UserName : </label>
          <br/>
   <input type="text" placeholder="enter name" onChange={(e)=>setUserData({...userData,userName:e.target.value})}/>
          <br/>
        
          <label htmlFor=""> Enter the UserEmail : </label>
          <br/>
          <input type="email" placeholder="enter email"   onChange={(e)=>setUserData({...userData,userEmail:e.target.value})} />
          <br/>
    
          <label htmlFor=""> Enter the userAddress : </label>
          <br/>
          <input type="text" placeholder="enter address"   onChange={(e)=>setUserData({...userData,userAddress:e.target.value})} />
          <br/>
          <label htmlFor=""> Enter the userAge: </label>
          <br/>
          <input type="text" placeholder="enter userAge"   onChange={(e)=>setUserData({...userData,userAge:e.target.value})} />
          <br/>
          <br/>
          
          <button onClick={getData}>Login</button><br/>
          <h1>{userData.userName}</h1>
          <h1>{userData.userEmail}</h1>
           <h1>{userData.userAddress}</h1>
           <h1>{userData.userAge}</h1>
      </form>
    </div>
  );
}
export default Login;

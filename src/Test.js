import { useState } from "react";

 function Test(){
    const [userName,setUserName]= useState("John");
    const [userAge,setUserAge]=useState(20);
    const [userCollage,setUserCollage]=useState("Holkar");
    const [userAddress,setUserAddress]=useState("Indore");
    const [userLocation,setUserLocation]=useState(true);
    let names="smith";
    const changeName =() =>{
        names="John smith";
        console.log(names);
        setUserName("hello John smith");
    }
    return(
        <>
            <h1>hello Test State</h1>
            <h1>{userName}</h1>
            <h1>{userAge}</h1>
            <h1>{userCollage}</h1>
            <h1>{userAddress}</h1>
            <h1>{userLocation}</h1>
            <h1>{userLocation?'login page':'not page'}</h1>
            <button onClick={changeName}>change</button>
        </>
    )
}
export default Test
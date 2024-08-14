import React from "react";
import { useState } from "react";
import './Login.css'

function Login(){
    const[data,setData] = useState({
        name:"",
        password:""
    })

    function handleSubmit(e){
        e.preventDefault();
        console.log(data)
    }
    
    function HandleChange(e){
        const {name,value} = e.target;
        setData({
            ...data,
            [name]:value
        })
    }

// console.log(data)
    return(
    <>

    <div className="container">
    <b> Login</b>
    <div className="first-Email">
       <label >E-Mail:</label>
       <input type="text" 
       placeholder="name"
       name="name"
       onChange={HandleChange}
       
       />


        </div>
        <div className="second-Pass">
        <label>Password:</label>
        <input type="password" 
        placeholder="password"
        name="password"
        onChange={HandleChange}

        />

        </div>
        <button type="button" onClick={handleSubmit}>Login</button>

    </div>
    </>
    )
}

export default Login
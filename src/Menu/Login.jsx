import React, { useState } from "react";
import axiosInstance from "../Helpers/AxiosInstance";
import { useNavigate } from "react-router-dom";
const Login=()=>{

    let navigate=useNavigate
    let [data,setData]=useState({
        userEmail:"",
        password:""
    })
    let {userEmail,password}=data
    let handleChange=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setData({...data,[name]:value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        // console.log(data);
        let payload={userEmail,password}
        let {data}=await axiosInstance.post("./authenticate",payload);
        console.log(data);
        alert("Login Success")
        let token=data.token;
        let role=data.role
        localStorage.setItem("token",token);
        localStorage.setItem("role",role);
        
    
    }
    return(
        <div id="login"><br /><br />
        <div id="login1"><br /><br />
            <h1 className="text-black text-center text-4xl font-bold">Login page</h1><br />
            <form id="c" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="font-medium mb-2  text-black wi text-center">UserEmail:</label>
                <input type="text" name="userEmail" id="email" value={userEmail} placeholder="Enter your email" onChange={handleChange} className="w-full border rounded-md bg-transparent border-gray-400 p-3 bg-white"/>
            </div>
            
            <div className="mb-3">
                <label className="font-medium mb-2  text-black text-center" >Password:</label>
                <input type="password" id="password" name="password" value={password} placeholder="Enter your password" onChange={handleChange} className="w-full border rounded-md bg-transparent border-gray-400 p-3 bg-white"/>
            </div>
            <div>
                <button type="submit" className="bg-white">Register</button>
                 </div>
        </form>
        

        </div>
        </div>
    )
}
export default Login
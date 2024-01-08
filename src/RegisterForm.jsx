import React, { useState } from "react";
import axiosInstance from "./Helpers/AxiosInstance";
import { useNavigate } from "react-router-dom";
const RegisterForm=()=>{
    let navigate=useNavigate()
    let [data,setData]=useState({
        userName:"",
        email:"",
        password:"",
        dob:"",
        phone:"",
        gender:""
    })
    let {userName,email,password,dob,phone,gender}=data
    let handleData=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setData({...data,[name]:value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        let payload={userName,email,password,dob,phone,gender}
        await axiosInstance.post("/users/save",payload)
    
        alert("Registration Completed Successfully")
        navigate("/login")
        

        
    }
    return(
        <div id="register1">
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="font-medium mb-2 flex text-black">Username:</label>
                <input type="text" name="userName" id="username" placeholder="Enter your username" onChange={handleData} className="w-full border rounded-md bg-transparent border-gray-400 p-3 bg-white"/>
            </div>
            <div className="mb-3">
                <label className="font-medium mb-2 flex text-white">Email:</label>
                <input type="text" name="email" id="email" placeholder="Enter your email" onChange={handleData} className="w-full border rounded-md bg-transparent border-gray-400 p-3 bg-white"/>
            </div>
            <div className="mb-3">
                <label className="font-medium mb-2 flex text-white">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" onChange={handleData} className="w-full border rounded-md bg-transparent border-gray-400 p-3 bg-white"/>
            </div>
            <div className="mb-3">
            <label className="font-medium mb-2 flex text-white" htmlFor="">DOB:</label>
            <input type="date" name="dob" id="dateOfBirth" onChange={handleData} className=" bg-transparent p-3 bg-white" />
            </div>
            <div className="mb-3">
            <label className="font-medium mb-2 flex text-white" htmlFor="">Phone Number:</label>
            <input type="phone" name="phone" id="phone" placeholder="Enter the number" onChange={handleData} className=" bg-transparent p-3 bg-white" />
            </div>
            <div>
                <label className="font-medium mb-2  text-white" htmlFor="">Gender: </label>
                <input type="radio" onChange={handleData} value="Male" name="gender" id="" />
                <label className="font-medium mb-2  text-white" htmlFor="">Male</label>
                <input type="radio" onChange={handleData} value="Female" name="gender" id="" />
                <label className="font-medium mb-2  text-white" htmlFor="">Female</label>
            </div>
            <div>
                <button type="submit" className="bg-white">Register</button>
                 </div>
        </form>
        </div>
            )
}
export default RegisterForm
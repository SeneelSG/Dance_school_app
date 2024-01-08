import React, { useState } from 'react';
import axiosInstance from "../Helpers/AxiosInstance";
import { useNavigate } from 'react-router-dom';


const AddAcademyManagerRegister = () => {
    let token=localStorage.getItem("token")
  let navigate = useNavigate()
  let [data,setData]=useState(
      {
          userName:"",
          email:"",
          password:"",
          dob:"",
          phone:"",
          gender:""
      })
  let{userName,email,password,dob,phone,gender}=data;

  let handleData=(e)=>{
      let name=e.target.name
      let value=e.target.value
      setData({...data, [name]:value})
  }

  let handleSubmit= async(e)=>{
      e.preventDefault()
      let payload = {userName,email,password,dob,phone,gender}
      console.log(payload);
      let finalData=await axiosInstance.post(`/academymanagers/save`,payload,{
              headers : {
                  Authorization : `Bearer ${token}`
             }
          })   
          console.log(finalData);
          alert("Successfully")
          
       navigate("/adminDashboard/viewAcademyManager")
  }

  return (
    <div>
      <h1 className='text-2xl text-white text-center'>Add Academy Manager Register</h1>
      <form action='' onSubmit={handleSubmit} id='academymanager'>
            <div className="mb-3">
                <label className="font-medium mb-2 flex text-white">Name:</label>
                <input type="text" name="userName" placeholder="Enter your username"  className="w-full border rounded-md bg-transparent border-gray-400 p-3 bg-white" onChange={handleData} required/>
            </div>
            <div className="mb-3">
                <label className="font-medium mb-2 flex text-white">Email:</label>
                <input type="email" name="email" placeholder="Enter your email"  className="w-full border rounded-md bg-transparent border-gray-400 p-3 bg-white" onChange={handleData} required/>
            </div>
            <div className="mb-3">
                <label className="font-medium mb-2 flex text-white">Password:</label>
                <input type="password" name="password" placeholder="Enter your password"  className="w-full border rounded-md bg-transparent border-gray-400 p-3 bg-white" onChange={handleData} required/>
            </div>
            <div className="mb-3">
            <label className="font-medium mb-2 flex text-white" htmlFor="">DOB:</label>
            <input type="date" name="dob" className=" bg-transparent p-3 bg-white" onChange={handleData} />
            </div>
            <div className="mb-3">
            <label className="font-medium mb-2 flex text-white" htmlFor="">Phone Number:</label>
            <input type="number" name="phone" placeholder="Enter the number"  className=" bg-transparent p-3 bg-white" onChange={handleData} />
            </div>
            <div>
                <label className="font-medium mb-2  text-white" htmlFor="">Gender: </label>
                <input type="radio" name="gender" onChange={handleData} value="male"/>Male
                <input type="radio" name="gender" onChange={handleData} value="female"/>Female
            </div>
            <div>
                <button>Signup</button>
                 </div>
        </form>
        
    </div>
  )
}

export default AddAcademyManagerRegister

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link, useParams} from "react-router-dom"
import axiosInstance from "../Helpers/AxiosInstance";
const ViewAcademyManager = () => {
  let [managerData,setmanagerData]=useState([])
  let token=localStorage.getItem("token")
  // let navigate=useNavigate();
  let {id}=useParams()
  console.log(id);
  useEffect(()=>{
    let fetchData=async()=>{
      let {data}=await axiosInstance.get(`/academymanagers/getall`,{
        headers:{
          Authorization:`Bearer ${token}`,
        },
      })
      setmanagerData(data.data)
    }
    fetchData()
  },[token])
  return (
    <>
      <h1 className='text-2xl text-white text-center'>View Academy Manager Register</h1>
      <div id="march">
        <h1>Manager Details</h1>
        <div id="cards">
              <div>
                <div id="card">
                  <h1>{managerData.userName}</h1>
                  <h1>{managerData.role}</h1>
                  <h1>{managerData.email}</h1>
                  <h1>{managerData.password}</h1>
                  <h1>{managerData.dob}</h1>
                  <h1>{managerData.phone}</h1>
                  <h1>{managerData.gender}</h1>
                  <div>
                    <button><Link to={`/adminDashboard/viewAcademyManager/eachAcademyManager/${managerData.id}`}>View</Link></button>
                  </div>
                </div>
              </div>
            
        </div>
      </div>
    </>

  )
}

export default ViewAcademyManager

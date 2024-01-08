import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axiosInstance from '../Helpers/AxiosInstance';

const Eachacademymanager = () => {
    let [managerData,setmanagerData]=useState([])
    let token=localStorage.getItem("token");
    let {id}=useParams()
    useEffect(()=>{
        let fetchData=async()=>{
            let {data}=await axiosInstance.get(`/academymanagers/get/${id}`,{
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            })
            setmanagerData(data.data)
        }
        fetchData()
    },[])
  return (
    <div id="march">
        <h1>Each Manager Details</h1>
        <div id='cards'>

            <div>
                <div id='card'>
                    <h1>{managerData.userName}</h1>
                    <h1>{managerData.role}</h1>
                    <h1>{managerData.email}</h1>
                    <h1>{managerData.password}</h1>
                    <h1>{managerData.dob}</h1>
                    <h1>{managerData.phone}</h1>
                    <h1>{managerData.gender}</h1>
                </div>
                <button>Update</button>
                <button>Add Academy</button>
                <button>Delete</button>

            </div>
        </div>
      
    </div>
  )
}

export default Eachacademymanager

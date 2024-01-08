import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../Helpers/AxiosInstance';

const Updateacademymanager = () => {
    let navigate=useNavigate();
    let {id}=useParams();
    let token=localStorage.getItem("token");
    let [data,setData]=useState("")
    let {userName,email,password,dob,phone,gender}=data;
    useEffect(()=>{
        let fetchData=async()=>{
            let {data}=await axiosInstance.get(`/academymanagers/get/${id}`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(data,data);
            setData(data.data)
        };
        fetchData();
    },[]);
  return (
    <div>
      
    </div>
  )
}

export default Updateacademymanager

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../Helpers/AxiosInstance";
const AdminRegister=()=>{
    let navigate = useNavigate()
    let [data,setData]=useState(
        {
            userName:"",
            email:"",
            password:"",
            dob:"",
            phone:"",
            gender:""
        }
    )
    let{userName,email,password,dob,phone,gender}=data

    let handleData=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setData({...data, [name]:value})
    }

    let handleSignup= async(e)=>{
        e.preventDefault()
        console.log(data);
        try{
            let payload={userName,email,password,dob,phone,gender}
            console.log(payload);
            await axiosInstance.post("/admins/save",payload)
            alert("Admin Registered Successfully")
        }
        catch{
            alert("Server Error")
        }
        navigate("/login")
    }

    return (
        <div id='max'>
        <div id='aa'>
            <form action="" onSubmit={handleSignup}><br />
                <nav id='bb'>
                    <h1 className="text-white text-4xl text-center"><b>ADMIN REGISTER FORM</b></h1><br />
                </nav>

                <fieldset id='field'>
                    <legend className="text-white text-2xl"><b><i>Enter Details Here</i></b></legend>
                    <br />
                    <center>
                    <table>
                            <tr>
                                <th><label className="text-white" htmlFor="userName"><b>USERNAME :</b></label></th>
                                <td><input type="text" name="userName" value={userName} className="non" id="" required onChange={handleData}/></td>
                            </tr><br />
                            <tr>
                                <th><label className="text-white" htmlFor="email"><b>EMAIL :</b></label></th>
                                <td><input type="email" name="email" value={email} className="non" id="" required onChange={handleData}/></td>
                            </tr><br />
                            <tr>
                                <th><label className="text-white" htmlFor="password"><b>PASSWORD :</b></label></th>
                                <td><input type="password" name="password" value={password} className="non" id="" required onChange={handleData}/></td>
                            </tr><br />
                            <tr>
                                <th><label className="text-white" htmlFor="dob"><b>DATE OF BIRTH :</b></label></th>
                                <td><input type="date" name="dob" id="" value={dob} required onChange={handleData}/></td>
                            </tr><br />
                            <tr>
                                <th><label className="text-white" htmlFor="phone"><b>PHONE NUMBER :</b></label></th>
                                <td><input type="text" name="phone" value={phone} 
                                
                                className="non" id="" required onChange={handleData}/></td>
                                </tr><br />
                                <tr>
                                    <th><label className="text-white" htmlFor="gender"><b>GENDER :</b></label></th>
                                    <td id='zz'><input type="radio" name="gender" id="male" value="male" onChange={handleData}/>MALE
                                        <input type="radio" name="gender" id="female" value="female" onChange={handleData}/>FEMALE
                                    </td>
                                </tr>
                                <br/><br />
                                <button id="button"><b>SUBMIT</b></button>     
                            </table>
                        </center>
                    </fieldset>
                </form>
            </div>
            </div>
        )
    }
    
export default AdminRegister
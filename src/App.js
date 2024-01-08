import React from "react";
import Navbar from "./Navbar/Navbar";
import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Menu/Home";
import About from "./Menu/About";
import Gallery from "./Menu/Gallery";
import Login from "./Menu/Login";
import Register from "./Menu/Register";
import ProtectedRoutes from "./ServiceRoutes/ProtectedRoutes";
import AdminRegister from "./Admins/AdminRegister";
import Admindashboard from "./Admins/Admindashboard";
import AddAcademyManagerRegister from "./Admins/AddAcademyManagerRegister";
import ViewAcademyManager from "./Admins/ViewAcademyManager";
import ViewAcademy from "./Admins/ViewAcademy";
import ViewBranch from "./Admins/ViewBranch";
import ViewCourse from "./Admins/ViewCourse";
const App=()=>{
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/home" element={<ProtectedRoutes><Home/></ProtectedRoutes>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/adminRegister" element={<AdminRegister/>}/>
            <Route path="/adminDashboard" element={<Admindashboard/>}>
                <Route path="/adminDashboard/addAcademyManager" element={<AddAcademyManagerRegister/>}/>
                <Route path="/adminDashboard/viewAcademyManager" element={<ViewAcademyManager/>}/>
                <Route path="/adminDashboard/viewAcademy" element={<ViewAcademy/>}/>
                <Route path="/adminDashboard/viewBranch" element={<ViewBranch/>}/>
                <Route path="/adminDashboard/viewCourse" element={<ViewCourse/>}/>
                <Route path="/adminDashboard/home" element={<Home/>}/>
                </Route>

        </Routes>
        </BrowserRouter>
             )
}
export default App
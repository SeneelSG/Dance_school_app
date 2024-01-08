import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Menu=()=>{
    
    let navigate=useNavigate()
    let role=localStorage.getItem("role")
    let token=localStorage.getItem("token")

    let logoutHandler=()=>{
        alert("are you sure, you want to logout")
        localStorage.clear()
        navigate("/login")
    }
    return(
        <div id="menu">
            <ul>
                <li className="text-yellow-200"><Link to="/home">HOME</Link></li>
                <li className="text-yellow-200"><Link to="/about">ABOUT</Link></li>
                <li className="text-yellow-200"><Link to="/gallery">GALLERY</Link></li>
                {role==="ROLE_ADMIN"?<Link className="text-yellow-200" to="/adminDashboard"><li>ADMIN_DASHBOARD</li></Link>:null}
                { token ? <Link className="text-yellow-200" to="/login"><li onClick={logoutHandler}>LOGOUT</li></Link>:
                <>
                <Link className="text-yellow-200" to="/login">LOGIN</Link>
                <Link className="text-yellow-200" to="/register">REGISTER</Link>
                </>
                }
                 </ul>
        </div>
    )
}
export default Menu
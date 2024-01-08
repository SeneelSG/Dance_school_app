import React from "react";
import AdminSideBar from "../AdminDashboard/AdminSideBar";
import AdminMainBar from "../AdminDashboard/AdminMainBar";
const Admindashboard=()=>{
    return(
        <section>
            <article id="article1">
                <AdminSideBar/>
                <AdminMainBar/>
            </article>
        </section>
    )
}
export default Admindashboard
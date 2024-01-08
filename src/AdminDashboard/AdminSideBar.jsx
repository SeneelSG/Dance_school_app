import React from 'react'
import {Link} from "react-router-dom";
const AdminSideBar = () => {
  return (
    <div>
      <br />
    <section id='a'>
      <br />
        <h1 className='text-4xl  text-white font-bold text-center'>Admin Side bar</h1><br />
        <article id='aa'>
            <li><Link to="/adminDashboard/addAcademyManager">Add Academy Manager</Link></li><br />
            <li><Link to="/adminDashboard/viewAcademyManager">View Academy Manager</Link></li><br />
            <li><Link to="/adminDashboard/viewAcademy">View Academy</Link></li><br />
            <li><Link to="/adminDashboard/viewBranch">View Branch</Link></li><br />
            <li><Link to="/adminDashboard/viewCourse">View Course</Link></li><br />
            <li><Link to="/adminDashboard/home">Home</Link></li>
        </article>
    </section>
    </div>
  )
}

export default AdminSideBar

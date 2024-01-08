import React from 'react'
import {Outlet} from "react-router-dom"
const AdminMainBar = () => {
  return (
    <div><br />
      <section id='b'><br />
        <h1 className='text-4xl text-white font-bold text-center'>Admin Main Bar</h1>
        <br />
        <article id='bb'>
        <Outlet/>
        </article>
      </section>
     
    </div>
     )
}

export default AdminMainBar

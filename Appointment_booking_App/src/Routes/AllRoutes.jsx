import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Appointment from '../Pages/Appointment'
import {Calender} from '../Pages/Calender'
import Form from '../Pages/Form'
import Navbar from '../Pages/Navbar'

function AllRoutes() {
  return (
    
    <div>
     <Navbar/>
      <Routes>
        <Route path="/"  />
        <Route path="/calender" element={<Calender/>} /> 
         <Route path="/appointment" element={<Appointment/>} />
         <Route path="/form" element={<Form/>} />
         
      </Routes>
    </div>
  )
}

export default AllRoutes
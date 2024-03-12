import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Parental_Control } from './Parental_Control.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { NavBar } from './NavBar/navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavBar />
    <Parental_Control />
  </BrowserRouter>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Parental_Control } from './Parental_Control.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Parental_Control />
  </BrowserRouter>
)

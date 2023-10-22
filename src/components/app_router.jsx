import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import Calendario from '../pages/calendario'
import Info from '../pages/info'



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Calendario />} />
        <Route path='/internal' element={<InternalPage />} />
        <Route path='/info' element={<Info />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter

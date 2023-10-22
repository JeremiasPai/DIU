import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import Calendario from '../pages/calendario'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Calendario />} />
        <Route path='/internal' element={<InternalPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter

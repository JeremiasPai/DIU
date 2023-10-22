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
        <Route path='/' element={<HomePage />} />
        <Route path='/internal' element={<InternalPage />} />
        <Route path='/calendario' element={<Calendario />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter

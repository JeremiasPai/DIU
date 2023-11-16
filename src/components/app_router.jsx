import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import InternalPage from '../pages/internal'
import Calendario from '../pages/calendario'
import Info1 from '../pages/info1'
import Info2 from '../pages/info2'
import Info3 from '../pages/info3'
import Info4 from '../pages/info4'
import Info5 from '../pages/info5'
import CalendarioP from '../pages/calendarioP'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Calendario />} />
        <Route path='/internal' element={<InternalPage />} />
        <Route path='/info1' element={<Info1 />} />
        <Route path='/info2' element={<Info2 />} />
        <Route path='/info3' element={<Info3 />} />
        <Route path='/info4' element={<Info4 />} />
        <Route path='/info5' element={<Info5 />} />
        <Route path='/calendario' element={<Calendario />} />
        <Route path='/profesor' element={<CalendarioP />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter

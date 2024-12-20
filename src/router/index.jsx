import Auth from '@/pages/Auth/Auth'
import Biling from '@/pages/Dashboard/Biling/Biling'
import Dashboard from '@/pages/Dashboard/Dashboard/Dashboard'
import MainDashboard from '@/pages/Dashboard/MainDashboard'
import Rtl from '@/pages/Dashboard/Rtl/Rtl'
import Table from '@/pages/Dashboard/Tables/Table'
import Login from '@/pages/Login/Login'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

const Router = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Auth/>}>
              <Route path='main' element={<MainDashboard/>}>
                <Route path='dashboard' element={<Dashboard/>}/>
                <Route path='table' element={<Table/>}/>
                <Route path='biling' element={<Biling/>}/>
                <Route path='rtl' element={<Rtl/>}/>
              </Route>
            </Route>
            <Route path='login' element={<Login/>}/>
        </Routes>
    </>
  )
}

export default Router
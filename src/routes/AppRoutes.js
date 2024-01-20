import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../screens/Main'
import HeaderNav from '../components/HeaderNav'
import About from '../screens/About'
import TourCardDetails from '../screens/TourCardDetails'
import India from '../screens/tourPakages/India'
import Explore from '../screens/tourPakages/Explore'
import AllBookingDetails from '../screens/tourPakages/AllBookingDetails'




const AppRoutes = () => {


  return (
    <BrowserRouter>
    <HeaderNav/>
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/india" element={<India />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/allBookingDetails" element={<AllBookingDetails />} />
        <Route path="/tourCardDetails/:tour" element={<TourCardDetails />} />

        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/*" element={<h3>Page Not found</h3>} />

    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

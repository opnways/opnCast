import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home, Artist, Artists, Album, Albums, Profile} from '../pages'
export  function LoggedNavigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/album/:id" element={<Album />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/profile" element={<Profile />} />
      </Routes> 
    </BrowserRouter>
  )
}

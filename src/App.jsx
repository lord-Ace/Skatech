import { useState } from 'react'
import Home from '@/pages/Home.jsx'
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return(
  <Routes>
        <Route path="/" element={<Home />} />
  </Routes>
  )
}

export default App
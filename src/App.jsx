import React from 'react'
import { useState } from 'react'
import { Route, Routes, Router, Navigate } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage';
import PaymentsPage from './pages/PaymentPage';
import ServicesPage from './pages/MorePage';
import MorePage from './pages/Service';
import NavigationBar from './pages/NavigationBar';
function App() {
  const [count, setCount] = useState(0)

  return (
  
    <div className="min-h-screen bg-black text-white">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/payments" element={<PaymentsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/more" element={<MorePage />} />
    </Routes>
    <NavigationBar />
  </div>
  )
}

export default App

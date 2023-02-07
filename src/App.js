import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import React from 'react'
import Home from './pages/home'
import CoinPage from './pages/coinPage'
import './App.css'
;

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}  /> 
                <Route  path='/coinPage/:id' element={<CoinPage />}  /> 
            </Routes>
        </BrowserRouter>
    )
}

export default App

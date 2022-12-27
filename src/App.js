import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './component/Dashboard';
import Navbar from './component/global/shared/Navbar';
import Customer from './component/Dashboard/Customer';


function App() {
  return (
    <BrowserRouter >
    <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />}>
        </Route>
        <Route path="/customer" element={<Customer />}>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;


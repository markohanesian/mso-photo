import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// pages
import Home from "./pages/Home/Home"

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/Gallery" element={<Login/>}/>
          <Route path="/Pricing" element={<RecoveryPassword />} />
          <Route path="/About" element={<RecoveryPassword/>}/>
          <Route path="/Blog" element={<RecoveryPassword />} />
          <Route path="/Contact" element={<RecoveryPassword/>}/> */}
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
    </Router>
  );
}

export default App;

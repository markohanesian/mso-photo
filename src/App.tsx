import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/Gallery" element={<Login/>}/>
          <Route path="/Pricing" element={<RecoveryPassword />} /> */}
          <Route path="/About" element={<About/>}/>
          {/* <Route path="/Blog" element={<RecoveryPassword />} /> */}
          <Route path="/Contact" element={<Contact/>}/> *
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// pages
import Home from "./pages/Home/Home"

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route exact path="/Gallery" element={<Login/>}/>
          <Route exact path="/Pricing" element={<RecoveryPassword />} />
          <Route exact path="/About" element={<RecoveryPassword/>}/>
          <Route exact path="/Blog" element={<RecoveryPassword />} />
          <Route exact path="/Contact" element={<RecoveryPassword/>}/> */}
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
    </Router>
  );
}

export default App;

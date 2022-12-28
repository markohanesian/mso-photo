import React from "react";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

import { Link } from "react-router-dom";



function Navbar() {
  

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" >
          Navbar
          
        </Typography>
        
          <div >
            <Link to="/" >
              Home
            </Link>
            <Link to="/about" >
              About
            </Link>
            {/* <Link to="/contact" className={classes.link}>
              Contact
            </Link>
            <Link to="/faq" className={classes.link}>
              FAQ
            </Link> */}
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;

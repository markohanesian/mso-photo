import React from "react";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import './NavBar.css'

function Navbar() {


  return (
    <AppBar sx={{ backgroundColor: "#070b4a" }} position="static">
      <CssBaseline />
      <Toolbar>
        <Box
          component="img"
          sx={{
            height: 48,
            m: "0 1rem 0 0"
          }}
          alt="logo"
          src="MSOP-logo.png"
        />
        <Typography variant="body1" >
          MSO Photo
        </Typography>

        <div style={{
          marginLeft: '40px'
        }}>
          <Link to="/" className="NavItem">
            Home
          </Link>
          <Link to="/About" className="NavItem">
            About
          </Link>
          <Link to="/Services" className="NavItem">
            Services
          </Link>
          <Link to="/Contact" className="NavItem">
            Contact
          </Link>
          {/* <Link to="/faq" className={classes.link}>
              FAQ
            </Link> */}
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;

import React from "react";
import { Container, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Container
      maxWidth="md"
      sx={{
        padding: "3rem",
      }}
    >
      <Stack spacing={3} maxWidth={700}>
        <Typography variant="h4">Capturing Your Best Light</Typography>
        <Typography variant="body1">
          {" "}
          Set your brand apart with beautiful imagery so you can SHOW the world
          how great it is without having to say a word.
        </Typography>
        <Button variant="contained" style={{ backgroundColor: "#070b4a", width: '200px'}}> 
          <Link to="/Services" style={{ color: "white", outline: 'none', textDecoration: 'none', width: '100%'}}>
            book your session
          </Link>
        </Button>
      </Stack>
    </Container>
  );
}

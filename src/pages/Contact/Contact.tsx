import * as React from "react";
import NavBar from "../../components/nav/NavBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Contact() {
    return (
        <>
            <NavBar />
            <Container maxWidth="lg" sx={{
                padding: "0  0 3rem 0"
            }}>
                <Typography variant="h1" sx={{
                    margin: "1rem 0 3rem 0"
                }}>
                    Contact
                </Typography>
                <Typography variant="body1" sx={{
                    marginBottom: "3rem"
                }}>
                    Mark Ohanesian Photography 
                    Sacramento, CA
                    hello@markohanesian.com
                </Typography>
            </Container>
        </>
    );
}

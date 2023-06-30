import * as React from "react";
import NavBar from "../../components/nav/NavBar";
import Container from "@mui/material/Container";
import MasonryImageList from "../../components/imageList/ImageList";
import Typography from "@mui/material/Typography";
import TestimonialCard from '../About/TestimonialCard';

export default function About() {
    return (
        <>
            <NavBar />
            <Container maxWidth="lg" sx={{
                padding: "3rem"
            }}>
                <Typography variant="h1" sx={{
                    margin: "1rem 0 3rem 0"
                }}>
                    About
                </Typography>
                <Typography variant="body1" sx={{
                    marginBottom: "1rem"
                }}>
                    Mark Ohanesian Photography is a commercial studio located in
                    Sacramento, CA that specializes in commercial photography (photography
                    for businesses) with over a decade of experience. We use professional
                    quality cameras, lenses, and lighting equipment, as well as retouch
                    any flaws in post-processing, in order to capture the highest quality
                    imagery.
                </Typography>
                <Typography variant="body1" gutterBottom sx={{
                    marginBottom: "3rem"
                }}>

                    The popularity of online consumerism means that your personal
                    brand/company image starts with an image. People want to see
                    authentic, beautiful, and captivating photos of goods and services
                    that tell a story and enhance your brand. Set your brand apart with
                    beautiful imagery so you can SHOW the world how great it is without
                    having to say a word.
                </Typography>
                <Typography variant="h2" sx={{
                    margin: "1rem 0 "
                }}>Testimonials</Typography>
                <TestimonialCard />
            </Container>
            <MasonryImageList />
        </>
    );
}

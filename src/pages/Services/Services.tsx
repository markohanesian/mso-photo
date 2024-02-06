import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Navbar from "../../components/nav/NavBar";
import MasonryImageList from "../../components/imageList/ImageList";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

function createServiceItem(
  title: string,
  description: string,
  price: string | number
) {
  return { title, description, price };
}

const serviceItems = [
  createServiceItem(
    "Headshots",
    "Shot with professional lighting \nRetouched to naturally remove flaws  \nGroup discounts available  \n \nPricing is for 3 edited photos from the session",
    "$250"
  ),
  createServiceItem(
    "Branding",
    "Standard Small Business Package: 20 photos for marketing your brand delivered month to month so you always have new content",
    "$800"
  ),
  createServiceItem(
    "Products",
    "Standard photos on white background for ecommerce/online, oversized items, Styled product photos (photos that show brand colors, product ingredients, use props, etc) - subject to hourly rate (message for details)",
    "$75/photo"
  ),
  createServiceItem(
    "Events",
    "Parties, corporate, etc - can add a second photographer or videographer for an additional cost  \n \npricing is for a 2-hour photoshoot",
    "$600"
  ),
  createServiceItem(
    "Weddings",
    "Creative and candid wedding photos that tell a stunning story of your dream day. Two photographers will be on location to capture multiple angles of all important moments \n \n Pricing is for a full-day rate (8 hours)",
    "$5000"
  ),
];

export default function Services() {
  return (
    <>
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{
          padding: "3rem",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            margin: "1rem 0 3rem 0",
            fontSize: "30px",
          }}
        >
          Services
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {serviceItems.map((service, index) => (
            <Card
              key={index}
              sx={{ maxWidth: "700px", width: "100%", marginBottom: "1rem" }}
            >
              <CardContent
                sx={{
                  backgroundColor: "#070b4a",
                  color: "white",
                  position: "relative",
                }}
              >
                <Box
                  sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {service.price}
                  </Typography>
                </Box>
                <Typography
                  variant="h2"
                  component="div"
                  sx={{ fontSize: 20, marginBottom: "2rem", fontWeight: 700, letterSpacing: '2px' }}
                >
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ whiteSpace: "pre-line", lineHeight: '1.5rem' }}>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
      <MasonryImageList />
    </>
  );
}

import * as React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Navbar from '../../components/nav/NavBar';
import MasonryImageList from '../../components/imageList/ImageList';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function createServiceItem(
    title: string,
    description: string,
    price: string | number,
) {
    return { title, description, price };
}

const serviceItems = [
    createServiceItem('Headshots', 'Shot in studio with professional lighting. Group sessions for entire company/team discounted depending on size', 'Starting at $250 for 3 photos for one individual ($75 each additional)'),
    createServiceItem('Branding', 'Standard Small Business Package: 20 photos for marketing your brand delivered month to month so you always have new content ', 'starting at $800'),
    createServiceItem('Products', 'Standard photos on white background for ecommerce/online, oversized items, Styled product photos (photos that show brand colors, product ingredients, use props, etc) - subject to hourly rate (message for details) ', 'starting at $75/photo'),
    createServiceItem('Events', 'Parties, corporate, etc - can add second photographer or videographer for additional cost', 'Starting at $600 for 2 hour photoshoot'),
    createServiceItem('Weddings', 'Creative and candid wedding photos that tell a stunning story of your dream day. Two photographers will be on location to capture multiple angles of all important moments', 'Starting at $5000 for full-day rate (8 hours)'),
];

export default function Services() {
    return (
        <>
            <Navbar />
            <Container maxWidth="lg" sx={{
                padding: "3rem"
            }}>
                <Typography variant="h1" sx={{
                    margin: "1rem 0 3rem 0", fontSize: '30px'
                }}>
                    Services
                </Typography>
                <List>
                    {serviceItems.map((service, index) => (
                        <ListItem key={index}>
                            <ListItemText
                                primary={service.title}
                                secondary={
                                    <>
                                        <Typography variant="body2" component="span">
                                            {service.description}
                                        </Typography>
                                        <Typography variant="body2" component="span">
                                            {service.price}
                                        </Typography>
                                    </>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Container>

            <MasonryImageList />
        </>
    );
}

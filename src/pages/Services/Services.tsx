import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Navbar
    from '../../components/nav/NavBar';
import MasonryImageList from '../../components/imageList/ImageList'


function createData(
    title: string,
    description: string,
    price: string | number,
) {
    return { title, description, price };
}

const rows = [
    createData('Headshots', 'Shot in studio with professional lighting. Group sessions for entire company/team discounted depending on size', 'Starting at $250 for 3 photos for one individual ($75 each additional)'),
    createData('Branding', 'Standard Small Business Package: 20 photos for marketing your brand delivered month to month so you always have new content ', 'starting at $800'),
    createData('Products', 'Standard photos on white background for ecommerce/online, oversized items, Styled product photos (photos that show brand colors, product ingredients, use props, etc) - subject to hourly rate (message for details) ', 'starting at $75/photo'),
    createData('Events', 'Parties, corporate, etc - can add second photographer or videographer for additional cost', 'Starting at $600 for 2 hour photoshoot'),
    createData('Weddings', 'Creative and candid wedding photos that tell a stunning story of your dream day. Two photographers will be on location to capture multiple angles of all important moments', 'Starting at $5000 for full-day rate (8 hours)'),
];

export default function Services() {
    return (
        <>
            <Navbar />
            <Container maxWidth="lg" sx={{
                padding: "3rem"
            }}>
                <Typography variant="h1" sx={{
                    margin: "1rem 0 3rem 0"
                }}>
                    Services
                </Typography>
                <TableContainer /*component={Paper}*/>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.title}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell sx={{ verticalAlign: 'top' }} component="th" scope="row">
                                        {row.title}
                                    </TableCell>
                                    <TableCell sx={{ verticalAlign: 'top' }} align="left">{row.description}</TableCell>
                                    <TableCell sx={{ verticalAlign: 'top' }} align="left">{row.price}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>

            <MasonryImageList />
        </>
    );
}

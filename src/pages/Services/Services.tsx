import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from "@mui/material/Container";

import Navbar
    from '../../components/nav/NavBar';
import MasonryImageList from '../../components/imageList/ImageList'


function createData(
    title: string,
    description: number,
    price: number,
) {
    return { title, description, price };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Eclair', 262, 16),
    createData('Cupcake', 305, 3.7),
    createData('Gingerbread', 356, 16.0),
];

export default function Services() {
    return (
        <>

            <Navbar />
            <Container maxWidth="lg" sx={{
                padding: "3rem"
            }}>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Service</TableCell>
                                <TableCell align="right">description</TableCell>
                                <TableCell align="right">price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.title}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.title}
                                    </TableCell>
                                    <TableCell align="right">{row.description}</TableCell>
                                    <TableCell align="right">{row.price}</TableCell>
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

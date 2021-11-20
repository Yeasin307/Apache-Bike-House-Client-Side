import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `https://secure-inlet-19520.herokuapp.com/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email])
    return (
        <div>
            <h2 style={{ color: 'MidnightBlue', textAlign: 'center' }}>Your Orders</h2>
            <TableContainer component={Paper}>
                <Table aria-label="Orders Table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" sx={{ color: 'MidnightBlue', fontWeight: 700 }}>
                                Product Name
                            </TableCell>
                            <TableCell align="center" sx={{ color: 'MidnightBlue', fontWeight: 700 }}>
                                Name
                            </TableCell>
                            <TableCell align="center" sx={{ color: 'MidnightBlue', fontWeight: 700 }}>
                                Phone Number
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ m: 3 }}>
                        {orders.map((product) => (
                            <TableRow
                                key={product._id}
                            >
                                <TableCell align="center">
                                    {product.product}
                                </TableCell>
                                <TableCell align="center">
                                    {product.name}
                                </TableCell>
                                <TableCell align="center">
                                    {product.phone}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrders;
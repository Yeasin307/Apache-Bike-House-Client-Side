import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';
import { useHistory } from 'react-router-dom';

const AllOrders = () => {
    const { user, logout } = useAuth();
    const [orders, setOrders] = useState([]);
    const history = useHistory();

    useEffect(() => {
        let abortController = new AbortController();

        const url = `https://secure-inlet-19520.herokuapp.com/allorders?email=${user.email}`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
                else if (res.status === 401) {
                    logout();
                    history.push('/login');
                }
            })
            .then(data => setOrders(data));

        return () => {
            abortController.abort();
        }
    }, [history, logout, user.email])


    const handleDeleting = id => {
        const proceed = window.confirm('Are you confirm to delete?');
        if (proceed) {
            const uri = `https://secure-inlet-19520.herokuapp.com/cancelorders/${id}`;
            fetch(uri, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('successfully Deleted');
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                })
        }
    }

    return (
        <div>
            <h2 style={{ color: 'MidnightBlue', textAlign: 'center' }}>
                All Orders
            </h2>
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
                            <TableCell align="center" sx={{ color: 'MidnightBlue', fontWeight: 700 }}>
                                Payment Status
                            </TableCell>
                            <TableCell align="center" sx={{ color: 'MidnightBlue', fontWeight: 700 }}>
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
                                <TableCell align="center">
                                    {product.payment ?
                                        <p style={{ color: 'Green', fontWeight: 'bold' }}>Paid</p>
                                        :
                                        <p style={{ color: 'red', fontWeight: 'bold' }}>Unpaid</p>
                                    }
                                </TableCell>
                                <TableCell align="center">
                                    <Button onClick={() => handleDeleting(product._id)} variant="contained">Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AllOrders;
import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../Hooks/useAuth';
import { Button } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';

const MyOrders = () => {
    const { user, logout } = useAuth();
    const [orders, setOrders] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const url = `https://secure-inlet-19520.herokuapp.com/orders?email=${user.email}`
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
    }, [history, logout, user.email])


    const handleCanceling = id => {
        const proceed = window.confirm('Are you confirm to cancel?');
        if (proceed) {
            const uri = `https://secure-inlet-19520.herokuapp.com/cancelorders/${id}`;
            fetch(uri, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('successfully Canceled');
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                })
        }
    }

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
                            <TableCell align="center" sx={{ color: 'MidnightBlue', fontWeight: 700 }}>
                                Payment Status
                            </TableCell>
                            <TableCell align="center" sx={{ color: 'MidnightBlue', fontWeight: 700 }}>
                                Order Cancel
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
                                        <p style={{ color: 'green', fontWeight: 'bold' }}>Paid</p>
                                        :
                                        <Link
                                            style={{ textDecoration: 'none' }}
                                            to={`/dashboard/payment/${product._id}`}
                                        >
                                            <Button variant="contained">Pay</Button>
                                        </Link>
                                    }
                                </TableCell>
                                <TableCell align="center">
                                    {product.payment ?
                                        <p style={{ color: 'green', fontWeight: 'bold' }}>Paid</p>
                                        :
                                        <Button onClick={() => handleCanceling(product._id)} variant="contained">Cancel</Button>}
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
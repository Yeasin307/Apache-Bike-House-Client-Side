import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://secure-inlet-19520.herokuapp.com/explore')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you confirm to delete?');
        if (proceed) {
            const uri = `https://secure-inlet-19520.herokuapp.com/deleteproduct/${id}`;
            fetch(uri, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('successfully Deleted');
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                })
        }
    }

    return (
        <div>
            <h2 style={{ color: 'MidnightBlue', textAlign: 'center' }}>
                Products List
            </h2>
            <TableContainer component={Paper}>
                <Table aria-label="Orders Table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" sx={{ color: 'MidnightBlue', fontWeight: 700 }}>
                                Product Name
                            </TableCell>
                            <TableCell align="center" sx={{ color: 'MidnightBlue', fontWeight: 700 }}>
                                Price
                            </TableCell>
                            <TableCell align="center" sx={{ color: 'MidnightBlue', fontWeight: 700 }}>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ m: 3 }}>
                        {products.map((product) => (
                            <TableRow
                                key={product._id}
                            >
                                <TableCell align="center">
                                    {product.name}
                                </TableCell>
                                <TableCell align="center">
                                    {product.price}
                                </TableCell>
                                <TableCell align="center">
                                    <Button onClick={() => { handleDeleteProduct(product._id) }} variant="contained">Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageProducts;
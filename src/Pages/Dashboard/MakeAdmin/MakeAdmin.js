import { Button, TextField, Alert } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {

        e.preventDefault()
        const user = { email };

        fetch('https://secure-inlet-19520.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })
        e.target.reset();
    }
    return (
        <>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%', mb: 3 }}
                    label="Enter Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="filled" />
                <br />
                <Button type="submit" variant="contained">Submit</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </>
    );
};

export default MakeAdmin;
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="fixed" style={{ backgroundColor: "ForestGreen", color: "black" }}>
                <Toolbar>
                    <Link to="/home">
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            < MenuIcon style={{ color: 'white' }} ></MenuIcon>
                        </IconButton>
                    </Link>
                    <Typography variant="h5" component="div" style={{ color: 'white' }} sx={{ flexGrow: 1, textAlign: "start", fontWeight: 'bold' }}>
                        Apache Bike House
                    </Typography>
                    {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/explore">
                                    <Button color="inherit">Explore</Button>
                                </NavLink>
                                <Button style={{ color: 'white' }} onClick={logout} color="inherit">Logout</Button>
                            </Box>
                            :
                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/explore">
                                    <Button color="inherit">Explore</Button>
                                </NavLink>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                    <Button color="inherit">Login</Button>
                                </NavLink>
                            </Box>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;
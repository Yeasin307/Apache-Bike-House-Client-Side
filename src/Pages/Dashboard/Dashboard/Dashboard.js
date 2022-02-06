import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';
import AllOrders from '../../AllOrders/AllOrders';
import MyOrders from '../../MyOrders/MyOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddProducts from '../../AddProducts/AddProducts';
import AddReview from '../../AddReview/AddReview';
import Pay from '../../Pay/Pay';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { user, admin, logout } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Box sx={{ display: 'flex', flexDirection: 'column', my: 3 }}>
                <Link style={{ textDecoration: 'none', marginBottom: '10px' }} to={`${url}`}>
                    <Button sx={{ width: '75%' }} variant='contained'>
                        {
                            admin ? 'All Orders' : 'My Orders'
                        }
                    </Button>
                </Link>
                <Link style={{ textDecoration: 'none', marginBottom: '10px' }} to="/home">
                    <Button sx={{ width: '75%' }} variant='contained'>Home</Button>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/explore">
                    <Button sx={{ width: '75%' }} variant='contained'>Explore</Button>
                </Link>
                {
                    !admin && user && <Link style={{ textDecoration: 'none' }} to={`${url}/addreview`}>
                        <Button sx={{ width: '75%', marginTop: '10px' }} variant='contained'>Review</Button>
                    </Link>
                }
                {admin && <Box >
                    <Link style={{ textDecoration: 'none' }} to={`${url}/makeadmin`}>
                        <Button sx={{ width: '75%', marginTop: '10px' }} variant='contained'>Make Admin</Button>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to={`${url}/addproduct`}>
                        <Button sx={{ width: '75%', marginTop: '10px' }} variant='contained'>Add Products</Button>
                    </Link>
                </Box>}
                <Button sx={{ width: '75%', marginLeft: '25px', marginTop: '10px' }} onClick={logout} variant='contained'>Logout</Button>
            </Box>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            DASHBOARD
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >

                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <Switch>
                        <Route exact path={path}>
                            {admin ?
                                <AllOrders></AllOrders>
                                :
                                <MyOrders></MyOrders>}
                        </Route>
                        <Route path={`${path}/addreview`}>
                            <AddReview></AddReview>
                        </Route>
                        <Route path={`${path}/payment/:productId`}>
                            <Pay></Pay>
                        </Route>
                        <AdminRoute path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addproduct`}>
                            <AddProducts></AddProducts>
                        </AdminRoute>
                    </Switch>
                </Box>
            </Box>
        </>
    );
}

Dashboard.propTypes = {
    window: PropTypes.func,
};

export default Dashboard;

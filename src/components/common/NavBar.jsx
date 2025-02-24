/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    ListItemIcon,
    ListItemText,
    List,
    Typography,
    ListItemButton,
    Button
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Logo from "../../assets/app-logo.svg";
import styles from "./NavBar.module.css";
import theme from "../../theme";
import {Logout} from "@mui/icons-material";
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import logout from "../../pages/userAction/Logout.jsx";

const NavBar = () => {
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const {isLoggedIn, firstName} = useSelector((state) =>
        state.currentUser);
    const dispatch = useDispatch();

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const handleDrawerNavigation = (path) => () => {
        navigate(path);
        setDrawerOpen(false); // Close the drawer when a navigation item is clicked
    };

    const handleLogin = () => {
        navigate('/login')
    }
    const handleLogout = () => {
        dispatch(logout());
    }

    const handleLogoClick = () => {
        navigate('/');
    }
    return (
        <>
            <AppBar position="fixed" color="primary">
                <Toolbar className={styles.toolBar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <img
                        src={Logo}
                        alt="App Logo"
                        width={50}
                        height={50}
                        style={{marginRight: "16px", cursor: 'pointer'}}
                        onClick={handleLogoClick}
                    />
                    <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
                        Study Guide Helper
                    </Typography>
                    {isLoggedIn ? (
                        <Typography variant="h6" color="inherit">
                            Welcome, {firstName}!
                        </Typography>
                    ) : (
                        <Button color="inherit" onClick={handleLogin}>
                            Login</Button>
                    )}
                </Toolbar>
            </AppBar>

            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}
                    PaperProps={{
                        style: {
                            // @ts-ignore
                            backgroundColor: theme.palette.background.secondary, // Use secondary background
                            color: theme.palette.text.primary,
                        },
                    }}>
                <div className={styles.drawer}>
                    <List>
                        <ListItemButton onClick={handleDrawerNavigation('/')}>
                            <ListItemIcon>
                                <HomeIcon color="primary"/>
                            </ListItemIcon>
                            <ListItemText primary="Home"/>
                        </ListItemButton>
                        {isLoggedIn ? (
                        <ListItemButton onClick={handleLogout}>
                            <ListItemIcon>
                                <Logout color="primary"/>
                            </ListItemIcon>
                            <ListItemText primary="Logout"/>
                        </ListItemButton>
                            ) : (
                                <ListItemButton onClick={handleDrawerNavigation('/login')}>
                            <ListItemIcon>
                                <PersonAddIcon color="secondary"/>
                            </ListItemIcon>
                                    <ListItemText primary="Login"/>
                        </ListItemButton>
                                    )}
                        <ListItemButton onClick={handleDrawerNavigation('/register')}>
                            <ListItemIcon>
                                <HomeIcon color="secondary"/>
                            </ListItemIcon>
                            <ListItemText primary="Register"/>
                        </ListItemButton>
                        <ListItemButton onClick={handleDrawerNavigation('/dashboard')}>
                            <ListItemIcon>
                                <DashboardIcon color="secondary"/>
                            </ListItemIcon>
                            <ListItemText primary="Dashboard"/>
                        </ListItemButton>
                    </List>
                </div>
            </Drawer>
        </>
    );
};
export default NavBar;

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, ListItemIcon, ListItemText, List, Typography, ListItemButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
// @ts-ignore
import Logo from "../../assets/app-logo.svg";
// @ts-ignore
import styles from "./NavBar.module.css";
import theme from "../../theme";
import { Logout } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
 const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

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

  const handleLogoClick = () => {
    navigate('/');
  }
  return (
    <>
      <AppBar position="fixed" color="primary">
        <div ></div>
        <Toolbar className={styles.toolBar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <img
          src={Logo}
          alt="App Logo"
          width={50}
          height={50}
          style={{marginRight: "16px", cursor: 'pointer'}}
          onClick={handleLogoClick}
          />
          <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
            Study Guide Helper
          </Typography>
          <Button color="inherit" onClick={handleLogin} >Login</Button>
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
            <ListItemButton onClick={handleDrawerNavigation('/logout')}>
              <ListItemIcon>
                <Logout color="primary"/>
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
            <ListItemButton onClick={handleDrawerNavigation('/register')}>
              <ListItemIcon>
                <PersonAddIcon color="secondary"/>
              </ListItemIcon>
              <ListItemText primary="Register" />
            </ListItemButton>
            <ListItemButton onClick={handleDrawerNavigation('/')}>
              <ListItemIcon>
                <HomeIcon color="primary"/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton onClick={handleDrawerNavigation('/dashboard')}>
              <ListItemIcon>
                <DashboardIcon color="secondary"/>
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </List>
        </div>
      </Drawer>
    </>
  );
};
export default NavBar;

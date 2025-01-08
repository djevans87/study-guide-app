import React from 'react'
import { AppBar, Toolbar, Button } from '@mui/material'

 const NavBar = () => {
  return (
   <>
   <AppBar position="static">
    <Toolbar>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Register</Button>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Dashboard</Button>
    </Toolbar>
   </AppBar>
   </>
  )
}
export default NavBar;
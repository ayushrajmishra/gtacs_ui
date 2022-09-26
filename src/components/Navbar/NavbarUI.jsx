
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavbarUI = () => {
  return (
    <AppBar>
        <Toolbar>
        <Typography variant="h6" style={{flexGrow:1}}>Logo</Typography>
        
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/curriculum">Curriculum</Button>
        <Button color="inherit" component={Link} to="/training">Training</Button>
       
        </Toolbar>
    </AppBar>
  )
}

export default NavbarUI
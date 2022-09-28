
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const NavbarUI = () => {
  const [user, setUser] = useState('')
  useEffect(() => {

    //dispatch(loadUserStart())
    // axios.post('https://localhost:44390/api/Home/SearchUseGetCurrentUserID',null)
    // .then(
    //   (x)=>{
    //    setUser(x.data[0].DisplayName) 
    //     console.log("Username", x.data[0].DisplayName)
    //   }
    //   )
    // .catch()

    axios.post('https://localhost:44390/api/home/SearchUseGetCurrentUserID', {

      method: 'POST',

      credentials: 'include'

    }).then(
        (x)=>{
         setUser(x.data[0].DisplayName) 
          console.log("Username", x.data[0].DisplayName)
        }
        )
      .catch()


    // axios.post('https://localhost:44390/api/home/getLoggedInUser', {

    //   method: 'POST',

    //   credentials: 'include'

    // }).then(resp => resp.json());



  }, [])
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>Logo</Typography>

        <Button color="inherit" component={Link} to="/">Home</Button>
        {/* <Button color="inherit" component={Link} to="/curriculum">Curriculum</Button>
        <Button color="inherit" component={Link} to="/training">Training</Button> */}

        <Typography variant="h6" style={{ flexGrow: 1 }}><AccountCircleIcon /> {user === '' ? 'Guest' : user}</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarUI
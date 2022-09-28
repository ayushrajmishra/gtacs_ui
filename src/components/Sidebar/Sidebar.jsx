import { Box, Collapse, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useState } from 'react';


import SidebarData from './SidebarData';
const drawerWidth = 340;

const sxStyle = {
    background: "#414757",
    height: "60px",
    paddingLeft: "3rem",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#f5f5f5",
    fontSize: "18px"
}


const Sidebar = () => {

    //const isExpandable = 
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        
        setOpen((prev) =>!prev)
    }
    return (
        <>
            <Drawer variant='permanent'
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}>
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {
                            SidebarData.map((item) => {
                                console.log("sidebar data", item)
                                return (
                                    <ListItem key={item.title}>
                                        <ListItemButton onClick={handleClick} >
                                            <ListItemIcon>
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={item.title} />
                                            {!open ?
                                                <ListItemIcon>{item.iconClosed}</ListItemIcon> :
                                                <ListItemIcon>{item.iconOpened}</ListItemIcon>
                                            }
                                            {
                                                open && item.subNav && item.subNav.length > 0 ?

                                                    item.subNav.map((subItem, index) => {
                                                        return (
                                                        <Collapse in={open} timeout="auto" unmountOnExit>
                                                        <ListItem sx={sxStyle} key={index}>
                                                            <ListItemButton>
                                                                <ListItemIcon>
                                                                    {subItem.icon}
                                                                </ListItemIcon>
                                                                <ListItemText primary={subItem.title} />
                                                            </ListItemButton>
                                                        </ListItem>
                                                        </Collapse>)
                                                    }) : ""


                                            }
                                        </ListItemButton>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </Box>

            </Drawer>
        </>
    )
}

export default Sidebar
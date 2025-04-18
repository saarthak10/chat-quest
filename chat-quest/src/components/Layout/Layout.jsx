import { AppBar, Avatar, Box, Drawer, IconButton, ListItem, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import profileImage from '../../assets/actions/profileImage.svg'
import settingsIcon from '../../assets/actions/settingsIcon.svg'
import logoutIcon from '../../assets/actions/logoutIcon.svg'
import Sidebar from '../Sidebar/Sidebar'
const drawerWidth = 300

const Layout = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const container = window !== undefined ? () => window().document.body : undefined

  const handleMenu = (event)=>{
    setAnchorEl(event.currentTarget)
  }

  const handleClose = ()=>{
    setAnchorEl(null)
  }

  return (
    <Box display={'flex'}>
    <AppBar position='fixed'  sx={{
      width: { sm: `calc(100% - ${drawerWidth}px)` },
    }}>
      <Toolbar sx={{justifyContent:'end'}}>
        <IconButton   >
          <Avatar alt='Profile' src={profileImage} onClick={handleMenu} />
        </IconButton>
        <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} >
                  <img src={settingsIcon} style={{height:'20px' , width:'20px'}}/>
                <Typography >Settings</Typography></MenuItem>
                <MenuItem onClick={handleClose}>
                  <img src={logoutIcon} style={{height:'20px' , width:'20px'}}/>
                <Typography>
                  Log Out
                </Typography>
                </MenuItem>
              </Menu>

      </Toolbar>

    </AppBar>

    <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }} // Better open performance on mobile.
                    sx={{
                      display: { xs: 'block', sm: 'none' },
                      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    
                    }}
                    
                    >
                    <Sidebar />
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                      display: { xs: 'none', sm: 'block' },
                      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}
                    open>
                    <Sidebar />
                </Drawer>
            </Box>


    </Box>

)
}

export default Layout
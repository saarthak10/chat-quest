import React from 'react'
import PropTypes from 'prop-types';
import NewChatButton from '../Buttons/NewChatButton';
import {  Box, Grid2, Typography } from '@mui/material';
import theme from '../../config/theme';


const Sidebar = () => {
    // {onSidebarClick,history}
    // const handleSideBarClick = ()=>{


    // }

    return(
        <Grid2 sx={{background: theme.palette.primary.main, height:'100%'}}>

            <Box justifyContent={'center'} p={2}>
                <Typography variant='cardTitle' color='#fff'>
                    <span style={{fontWeight:'bold'}}>CHAT</span> QUEST
                </Typography>
            </Box>
            <NewChatButton  />

        </Grid2>
        
        
    )
}

export default Sidebar;
Sidebar.propTypes = {
  onSidebarClick: PropTypes.func,
  history: PropTypes.array
}

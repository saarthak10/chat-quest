import { Grid2, Typography } from '@mui/material'
import React from 'react'
import theme from '../../config/theme'

const Home = () => {
  return (
    <Grid2 container sx={{background:`${theme.palette.primary.main}`, width:'100%', height:'100%'}} columns={12} >
        <Typography>Home </Typography>
      </Grid2>
  )
}

export default Home
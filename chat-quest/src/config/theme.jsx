import {createTheme} from "@mui/material"
import {grey} from "@mui/material/colors"


let theme = createTheme({

    palette:{
        primary:{
            main: "#435334",
            normal:"#E6EAEE"
        },
        secondary:{
            main: "#39462C"
        },
        neutral:{
            light:"#FFEED6",
            medium: grey[200],
            normal: "#EAF2E1",
            main: grey[900]
        },
        overrides: {
            MuiButton: {
              raisedPrimary: {
                color: '#000000',
              },
            },
          }
    }

})


theme = createTheme(theme,{
    typography:{
        fontFamily:'DM Sans',
        link:{
            fontSize: '0.8rem',
            [theme.breakpoints.up('md')]:{
                fontSize:'0.9rem'
            },
            fontWeight:500,
            color: theme.palette.primary.main,
            display:'block',
            cursor:'pointer'
        },
        cardTitle:{
            fontSize:'1.2rem',
            display:'block',
            fontWeight: 500
        },
        h6:{
            fontSize:'1rem'
        },
        h7:{
            fontSize:'0.8rem'
        },
        h8:{
            fontSize:'0.7rem'
        },
        labelSmall:{
            fontWeight: '900',
            [theme.breakpoints.up('xs')]: {
                fontSize: '0.8rem'
            },
            [theme.breakpoints.up('sm')]: {
            fontSize: '1rem'
            }
        },
        labelLarge:{
            fontWeight: '700',
            [theme.breakpoints.up('xs')]: {
                fontSize: '20px'
            },
            [theme.breakpoints.up('sm')]: {
            fontSize: '24px'
            },
            [theme.breakpoints.up('md')]: {
            fontSize: '24px'
            },
            [theme.breakpoints.up('lg')]: {
            fontSize: '30px'
            }
        },
        extraLarge:{
            fontWeight: '700',
            // wordWrap: 'break-word',
            [theme.breakpoints.up('xs')]: {
                fontSize: '18px'
            },
            [theme.breakpoints.up('sm')]: {
            fontSize: '22px'
            },
            [theme.breakpoints.up('md')]: {
            fontSize: '50px'
            },
            [theme.breakpoints.up('lg')]: {
            fontSize: '50px'
            }
        }
    }
})


export default theme
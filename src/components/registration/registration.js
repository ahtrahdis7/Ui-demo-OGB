import React from 'react'

import taglineImg from "./tagline.png"
import RegistrationForm from "../registrationForm/registrationForm"
import { useStyles } from './styles'
import {Typography, Grid } from '@material-ui/core';
// import classes from '*.module.css';
// const useStyles = makeStyles({
//     tagline:{
//         flex: 1
//     }
// })

export default function Registration(props){

    const classes = useStyles();
    console.log(props);
    return(
        <div className={classes.maindiv}>
            <Grid container className={classes.gridContainer}>
                <Grid item md={6} lg={6} sm={12}  xs={12}>
                    <Typography variant="h2" className={classes.tagline}>
                        Helping <span className={classes.colorText}><i>you</i></span> find new clients,
                        and simplify <span className={classes.colorText} ><br></br>civil construction.</span>
                        
                    </Typography>
                    <div className={classes.image}>
                    <img
                        src={taglineImg}
                        height={330}
                        width={330}
                        alt="logo"
                        // align="center"
                        // style={{verticalAlign: 'middle' }}
                        />
                    </div>
                </Grid>

                <Grid item md={6} sm={12} lg={6} xs={12} className={classes.formGrid}>
                    <Typography variant="h4" className={classes.heading2} >Register as a contractor</Typography>
                    <RegistrationForm  onPress = {props.onPress} />
                </Grid>
            </Grid>
        </div>
    )
}
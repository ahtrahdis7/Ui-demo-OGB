import React from 'react'

import { Typography, Grid, Link, Container, CssBaseline} from '@material-ui/core';
import { useStyles } from './styles'
import { Email, Phone, Instagram, Facebook, Twitter } from '@material-ui/icons';

export default function Footer(){
    const classes = useStyles();
    return(
        <div className={classes.footer}>
            <CssBaseline/>
            {/* <Divider style={{width: "100%"}} /> */}
            <Container className={classes.container}>
                <Grid container className={classes.gridContainer} >
        
                    <Grid item className={classes.gridItem} xs={12} md={4} lg={4}>
                        <Typography className={classes.heading}>
                            Our Generation
                            <br></br>
                            Builders
                        </Typography>
                        <Typography>
                            123456, NoName Street<br></br>
                            Jaipur<br></br>
                            Rajasthan, India
                        </Typography>
                        <br></br>
                        <Typography className={classes.footerContent}>
                            Copyrights © 2020 OGB
                        </Typography>
                    </Grid>

                    <Grid item className={classes.gridItem} xs={12} md={4} lg={4}>
                        <Typography className={classes.heading}>
                            Need Help?
                            <br></br>
                            Contact Us.
                        </Typography>
                        <br></br>
                        <Phone style={{verticalAlign: 'middle' }} fontSize="large" /><span className={classes.contact}> +91 98765 43210</span>
                        <br></br>
                        <Email style={{verticalAlign: 'middle' }} fontSize="large"/><span className={classes.contact}> support@ogbuilders.com</span>
                    </Grid>

                    <Grid item className={classes.gridItem} xs={12} md={4} lg={4}>
                        <Typography className={classes.heading}>
                            Social
                        </Typography>
                        <span> <br></br> <Instagram fontSize="large"/> <Facebook fontSize="large"/> <Twitter fontSize="large"/> </span>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        {/* <br></br> */}
                        <Typography className={classes.footerContent}>
                            <span>
                                <Link className={classes.link}>Privacy Policy</Link>
                                <span style={{color: "white"}}> || </span>
                                <Link className={classes.link}>Terms Of Use</Link>
                            </span>
                        </Typography>
                    </Grid>
                </Grid>
             </Container> 
            <div className={classes.footerUi}></div>
            <div className={classes.bodyUi}></div>

        </div>
    )
    
}
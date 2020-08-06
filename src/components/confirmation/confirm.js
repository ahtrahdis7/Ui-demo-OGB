import React from 'react'

import { Typography, Grid } from '@material-ui/core';
import {useStyles} from './styles';

import reg from "./1.png"
import verif from "./2.png"
import conf from "./3.png"

export default function Confirmation(){
    const classes = useStyles();
    return(
        <div className={classes.mainDiv}>
            <Typography  className={classes.heading} variant="h4">
                Your application has been 
                <span style={{color: 'green'}}> registered.</span>
                <br></br>
                A representative from OGB will contact you within a week for verification.
            </Typography>

            <Grid className={classes.gridContainer} container>

                <Grid className={classes.gridItem} item>
                    <img 
                        src={reg}
                        height={100}
                        width={90}
                        alt="Registeration"
                        />
                    <Typography className={classes.heading2} variant="h4">Registration</Typography>
                    <Typography variant="h5" className={classes.text}>
                        Share your personal details
                        and <br></br> that's it! We will revert back to you
                        <br></br>
                        within one week.
                    </Typography>
                </Grid>

                <Grid className={classes.gridItem} item>
                    <img 
                        src={verif}
                        height={100}
                        width={90}
                        alt="Verification"
                        />
                    <Typography className={classes.heading2} variant="h4">Verification</Typography>
                    <Typography variant="h5" className={classes.text}>
                        We will verify your professional 
                        <br></br>
                        details through a telephonic call or
                        <br></br>
                        in-person meeting.
                    </Typography>
                </Grid>

                <Grid className={classes.gridItem} item>
                    <img 
                        src={conf}
                        height={100}
                        width={90}
                        alt="Confirmation"
                        />
                    <Typography className={classes.heading2} variant="h4">Confirmation</Typography>
                    <Typography className={classes.text}>
                        Our system confirms your 
                        <br></br>
                        application and you become our
                        <br></br> 
                        trusted partner.
                    </Typography>
                </Grid>

            </Grid>
        </div>
    )
}
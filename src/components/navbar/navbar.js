import React from 'react';
// import './styles.css'
import {AppBar, Typography,CssBaseline, Container, Toolbar, Button } from '@material-ui/core';
import {useStyles} from './styles'

export default function Navbar(){

    const classes = useStyles();

    return(
        <div>
            <CssBaseline />
            <AppBar className={classes.nav} color="white"  position="fixed" >
              <Container>
                <Toolbar className={classes.navContent}>
                    <Typography className={classes.title}  variant="h2" component="h5">
                      <strong>OGB</strong>
                    </Typography>
                    <Button className={classes.Home} >
                      Home
                    </Button>
                    <Button className={classes.navItem} >
                      About
                    </Button>
                    <Button  className={classes.navItem2}>
                      Help
                    </Button>
                    <Typography className={classes.ll} >
                    </Typography>
                    <Button className={classes.login} variant="contained" color="success">
                      LogIn
                    </Button>
                </Toolbar>
              </Container>
            </AppBar>
        </div>
    )
}
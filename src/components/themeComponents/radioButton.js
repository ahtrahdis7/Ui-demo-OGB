import { Radio } from '@material-ui/core'
import React from 'react';
import {  withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';



export const GreenRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
        color: green[600],
        },
    },
    checked: {},
    })((props) => <Radio color="default" {...props} />);
    
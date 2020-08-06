import { Checkbox } from '@material-ui/core'
import React from 'react';
import {  withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

export const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);
  

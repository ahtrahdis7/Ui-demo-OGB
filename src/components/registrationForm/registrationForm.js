import React from 'react'
import { useStyles } from './styles'
import {Typography, FormControlLabel, Link, Button } from '@material-ui/core';
import { GreenCheckbox } from '../themeComponents/checkBox';
import { GreenTextField } from '../themeComponents/textFeild';
import { GreenRadio } from '../themeComponents/radioButton';



export default function RegistrationForm(props){

    // console.log('inside reg form');
    // console.log(props);

    const classes = useStyles();
    const [selectedValue, setSelectedValue] = React.useState('No');
    const [state, setState] = React.useState(false);
    const handleChangeRadio = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleChangeCheckbox = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    return(
        <div>
            <Typography variant="h5" style={{fontWeight: 500, color: 'grey', fontSize: 20}}>All fields are mandatory</Typography>
            {/* <label className={classes.label}>Full Name</label><br></br> */}
            <br></br>
            <GreenTextField 
            label="Full Name" 
            type="text" 
            variant="outlined"
            className={classes.inputText}
            size="small"
            color="green"
             /><br></br>
            <GreenTextField 
            label="Email" 
            type="email" 
            variant="outlined"
            className={classes.inputText}
            size="small"
             /><br></br>
            <GreenTextField 
            label="Contact Number" 
            type="tel" 
            variant="outlined"
            className={classes.inputText}
            size="small"
             />
             <br></br>
             <Typography className={classes.radio}>Are you a licensed government contractor ?</Typography>
             
             <FormControlLabel 
             control={<GreenRadio
                checked={selectedValue === 'Yes'}
                onChange={handleChangeRadio}
                value="Yes"
                name="Yes"
                inputProps={{ 'aria-label': 'Yes' }}
                />} 
                label="Yes"
                style={{fontSize: 16, fontFamily: 'monospace', }}
            />
            <FormControlLabel 
             control={<GreenRadio
                checked={selectedValue === 'No'}
                onChange={handleChangeRadio}
                value="No"
                name="No"
                inputProps={{ 'aria-label': 'No' }}
                />} 
                label="No"
                style={{fontSize: 16, fontFamily: 'monospace', }}
            />
            {/* <GreenRadio
                checked={selectedValue === 'No'}
                onChange={handleChange}
                value="No"
                name="No"
                inputProps={{ 'aria-label': 'No' }}
                label="No"
            /> */}
            <br></br>
            <br></br>
            <FormControlLabel
                    control={<GreenCheckbox 
                        checked={state.checkedG} 
                        onChange={handleChangeCheckbox} 
                        name="checkedG" 
                        />}
                    label={<Typography>I agree to the  
                        <Link> Terms &amp; Conditions </Link><br></br>
                        and <Link>Privacy Policy</Link>
                        </Typography>}
                />
            <br></br>
            <br></br>
            
            <Button variant="contained" color="success" onClick={props.onPress} className={classes.registerBtn}>
                Register
            </Button>
        </div>
    )
} 
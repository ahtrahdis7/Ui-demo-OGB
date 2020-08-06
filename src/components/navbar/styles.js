

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    nav:{
      // paddingLeft: "1%"
    },
    navContent: {
      // paddingTop: 15,
      // paddingBottom:15,
      // paddingLeft: 50,
      flexGrow: 1,
    },
    title:{
      fontSize: 40,
      fontWeight: 1000,
      fontFamily: 'Roboto',
      letterSpacing: -10,
      lineHeight: 2,
    },  
    navItem:{
      marginLeft:"3%",
      fontWeight: 509,
      color: 'black',
      borderBottomColor: 'white',
      borderBottomWidth: 3,
      borderBottomStyle: 'solid',
      fontFamily: 'Roboto'
    },
    navItem2:{
      marginLeft:"3%",
      fontWeight: 509,
      color: 'black',
      borderBottomColor: 'white',
      borderBottomWidth: 3,
      borderBottomStyle: 'solid',
      fontFamily: 'Roboto'
    },
    Home: {
      borderBottomColor: 'green',
      borderBottomWidth: 3,
      borderBottomStyle: 'solid',
      marginLeft: '8%',
      fontWeight: 509,
      color: 'black',
      fontFamily: 'Roboto'
    },
    login:{
      textAlign: 'center',
      // justifyContent: 'flex-end',
      backgroundColor: 'green',
      color: 'white',
      borderRadius: 30,
      width: 125,
      height: 35,
      // paddingRight: 30,
      fontFamily: 'Roboto'
    },
    ll:{
        flexGrow: 1
    }
  });
import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles({
    mainDiv:{
        paddingTop: 160,
    },
    heading:{
        textAlign: 'center',
        fontWeight: 600,

    },
    gridContainer:{
        marginTop: 90,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        // flexWrap: 'wrap'
        marginBottom: 130
    },
    gridItem:{
        marginTop:30,
        alignContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    heading2:{
        fontWeight: 'light',
        fontSize: 30,
    },
    text:{
        marginTop: 10,
        fontSize: 20,
    }
})
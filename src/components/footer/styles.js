import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    container: {
        // paddingTop: 100,
        // backgroundColor: "white",
    },
    gridItem:{
        // height: 200,
        // width: 10,
        // backgroundColor: 'green',
        padding: 10,
        // paddingRight: "3%",
        paddingLeft: "7%",
        // borderStyle: 'solid',
        // borderWidth:2,
        // borderColor: 'green'
        marginTop: 10
    },
    gridContainer:{
        // paddingLeft:"7%",
        paddingTop: 10,
        flex: 1,
        flexDirection: 'row',
        // flexBasis: ''
        paddingLeft: '15%',
        paddingRight: "15%",
        justifyContent: 'space-around',
    },
    heading:{
        color: 'black',
        fontSize: 25,
        fontFamily: 'Roboto',
        fontWeight: 600,
    },
    footerContent:{
        fontWeight: 100,
        fontSize: 13,
        fontColor: 'black',
    },
    link: {
        // paddingBottom: 5,
        color: 'black',
        // fontSize:13
    },
    contact:{
        fontSize: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer:{
        marginTop: 40,
        borderTopColor: '#e0e0e0',
        borderTopWidth: 0.1,
        borderTopStyle: 'solid',
        // paddingTop:40,
        backgroundColor: '#fcfcfc'
        
    }
})
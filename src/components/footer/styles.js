import { makeStyles } from '@material-ui/core/styles';

const size = 90;

export const useStyles = makeStyles({
    container: {
        // paddingTop: 100,
        // backgroundColor: "white",
    },
    gridItem:{
        // height: 200,
        // width: 10,
        // backgroundColor: 'green',
//        padding: 10,
        // paddingRight: "3%",
//        paddingLeft: "7%",
        // borderStyle: 'solid',
        // borderWidth:2,
        // borderColor: 'green'
//        marginTop: 10
    },
    gridContainer:{
        paddingLeft:"7%",
//        paddingTop: 10,
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
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    footer:{
        marginTop: 40,
        borderTopColor: '#e0e0e0',
        borderTopWidth: 0.1,
        borderTopStyle: 'solid',
        paddingTop:40,
        backgroundColor: '#fcfcfc',
        position: 'relative',
        // bottom: 50,
        // height: 500,
        
    },
    footerUi:{
//        textAlign: 'right',
//        alignItems: 'right',
        borderTopLeftRadius: 240 ,
        // borderTopRightRadius: size * 2,
        height: 210,
        width: 170,
        background: 'green',
        display: 'inline-block',
        // marginTop: 0,
        // marginLeft: 1,
        // marginRight: 1,
        // marginBottom: 0,
        right: 0,
        bottom: 0,
        position: 'fixed'
        // borderWidth: 2,
        // borderColor: 'black',
        // borderStyle: 'solid',
    },
    bodyUi:{
        left: 0,
        bottom: 750,
        position: 'fixed',
        background: 'green',
        display: 'inline-block',
        borderTopRightRadius: 50 ,
        borderBottomRightRadius: 50,
        height: 100,
        width: 50,
    }
})
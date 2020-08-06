import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles({
    label:{
        fontSize: 18,
        letterSpacing: -1
    },
    inputText:{
        // height:40,
        // borderStyle: 'solid',
        // borderWidth: 2,
        // borderColor: 'white',
        backgroundColor: '#ebebeb',
        // borderRadius: 10
        width: 300,
        fontSize:15,
        fontFamily: 'monospace',
        marginTop: 10,
    },
    radio:{
        marginTop:30,
        fontSize:16,
        // fontFamily: 'monospace',
        // letterSpacing:-1,
        paddingTop: 15,

    },
    registerBtn:{
        marginTop: 30,
        backgroundColor: 'green',
        textAlign: 'center',
        fontSize: 15,
        width: 300,
        borderRadius: 30,
        color: 'white'
    }
})
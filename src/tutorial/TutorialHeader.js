import React from 'react'


import { makeStyles } from '@material-ui/core/styles';
import backimg from '../img/blueblocks.jpeg';

const colors = {
    background: '#00135B',
    text: '#fff',
}

const useStyles = makeStyles(theme => ({
    header: {
        height: '180px', 
        marginTop: '70px', 
        marginBottom: '20px',
        backgroundImage: `url(${backimg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',

        [theme.breakpoints.down('sm')]: {
            height: '120px', 
            marginBottom: '10px',
        },
        [theme.breakpoints.down('740')]: {
            marginTop: '60px', 
            height: '80px',
            marginBottom: '5px',
        },
    }, 
    textSpace: {
        paddingTop: '40px', 
        [theme.breakpoints.down('sm')]: {
            paddingTop: '35px', 
        },
        [theme.breakpoints.down('740')]: {
            paddingTop: '25px', 
        },
    },
    text: {
        color: colors.text,
        fontSize: '44pt',
        [theme.breakpoints.down('md')]: {
            fontSize: '36pt',
        }, 
        [theme.breakpoints.down('sm')]: {
            fontSize: '28pt', 
        },
        [theme.breakpoints.down('740')]: {
            fontSize: '150%', 
        },
        textAlign: 'center', 
        fontWeight: '900', 
        fontFamily: 'Arial sans-serif', 
    },

}))


function CompeHeader() {
    const classes = useStyles(); 

    return (
        <div className={classes.header}>
            <header className={classes.textSpace}>
                <div className={classes.text}>
                    QW Graph Classifier hands on!
                </div>
            </header>
        </div>
    )
}

export default CompeHeader

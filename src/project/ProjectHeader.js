import React from 'react'

import history from '../history.js';

import { makeStyles } from '@material-ui/core/styles';
import backimg from '../img/project.jpeg';

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
        paddingTop: '50px', 
        [theme.breakpoints.down('sm')]: {
            paddingTop: '35px', 
        },
        [theme.breakpoints.down('740')]: {
            paddingTop: '20px', 
        },
    },
    text: {
        color: colors.text,
        fontSize: '52pt',
        [theme.breakpoints.down('lg')]: {
            fontSize: '44pt', 
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '36pt',
        }, 
        [theme.breakpoints.down('sm')]: {
            fontSize: '28pt', 
        },
        [theme.breakpoints.down('740')]: {
            fontSize: '20pt', 
        },
        textAlign: 'center', 
        fontWeight: '900', 
        fontFamily: 'Arial sans-serif', 
    },
}));
function ProjectHeader() {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <header className={classes.textSpace}>
                <div className={classes.text}>
                    About Project
                </div>
            </header>
        </div>
    )
}

export default ProjectHeader;
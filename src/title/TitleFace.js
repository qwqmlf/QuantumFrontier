import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import ButtonBases from './LinkButton';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    },
    title: {
        color: '#fff',
        margin: '10px',
        fontSize: '180px',
        fontWeight: 'bold',
        [theme.breakpoints.down('md')]: {
            fontSize: '110px',
            fontWeight: 'bold',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '80px',
            fontWeight: 'bold',
        },
    },
    linkcard: {
        maxWidth: '100%', 
    },

}));


function TitleFace() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                Be a<br/>
                Quantum<br/>
                Native<br/>
            </div>
            <div className={classes.linkcard} >
                <ButtonBases />
            </div>
        </div>
        
    )
}

export default TitleFace;
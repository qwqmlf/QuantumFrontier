import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Gist from 'super-react-gist';

const colors = {
    background: '#262626', 
    resultBack: '#f2f2f2',
    h1: '#fff', 
    text: 'fff', 
    resultText: '#000',
    icon: 'BFBFBF'
}

const useStyles = makeStyles(theme => ({
    root: {
    },
    titleStyle: {
        padding: '20px 0px 0px 20px', 
        margin: '40px',
        lineHeight: '46px', 
        fontSize: '24pt', 
        [theme.breakpoints.down('sm')]: {
            fontSize: '26pt',
        },
        fontWeight: 'bold',
        textAlign: 'left', 
        borderBottom: 'groove 3px #C0C0C0', 
    }, 
    stitleStyle: { 
        margin: '10px 60px',
        [theme.breakpoints.down('740')]: {
            margin: '10px 40px',
        },
        lineHeight: '46px', 
        fontSize: '16pt', 
        fontWeight: 'bold',
        textAlign: 'left', 
    }, 
    itemStyle: {
        margin: '10px 60px',
        [theme.breakpoints.down('740')]: {
            margin: '10px 40px',
        },
    }, 
    imgStyle: {
        height: '360px',
        width: '500px',
    },
    gistStyle: {
        margin: '40px',
        [theme.breakpoints.down(740)]: {
            margin: '10px'
        },
    },
}));


function QuantumWalk() {
    const classes = useStyles();
    
    return (
        <div>
            <div className={classes.titleStyle}>
                <span>QuantumWalk</span>
            </div>
            <div className={classes.stitleStyle}>
                <span>量子ウォークの量子回路実装</span>
            </div>
            <div className={classes.itemStyle}>
                <p>
                    <span>量子ウォークについて量子回路上での実装について解説していきます。</span>
                </p>
            </div>

            <div className={classes.gistStyle}>
                <Gist url='https://gist.github.com/rum-yasuhiro/9da74292824a08354b4f1a32858ef33e' />
            </div>
        </div>
    )
}

export default QuantumWalk;
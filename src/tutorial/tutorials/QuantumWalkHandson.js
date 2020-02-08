import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Gist from 'super-react-gist';

const colors = {
    background: '#262626',
    h1: '#fff',
    text: '#fff',
    icon: '#BFBFBF',
    imgBack: '#fff',
}

const useStyles = makeStyles(theme => ({
    titleStyle: {
        color: colors.text,
        padding: '20px 0px 0px 20px', 
        margin: '40px',
        lineHeight: '46px', 
        fontSize: '24pt', 
        [theme.breakpoints.down('sm')]: {
            fontSize: '26pt',
            margin: '20px',
            lineHeight: '46px', 
        },
        [theme.breakpoints.down('xs')]: {
            padding: '0px', 
            fontSize: '16pt',
        },
        fontWeight: 'bold',
        textAlign: 'left', 
        borderBottom: 'groove 3px #C0C0C0', 
    }, 
    stitleStyle: { 
        color: colors.text,
        margin: '10px 60px',
        [theme.breakpoints.down('740')]: {
            margin: '10px 40px',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '0px', 
            margin: '20px',
        },
        lineHeight: '46px', 
        fontSize: '16pt', 
        fontWeight: 'bold',
        textAlign: 'left', 
    }, 
    itemStyle: {
        color: colors.text,
        margin: '10px 60px',
        [theme.breakpoints.down('740')]: {
            margin: '10px 40px',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '20px',
        },
        fontFamily: 'Quicksand YuGothic HiraginoKakuGothic Meiryo Osaka MSPGothic sansSerif', 
    }, 
    imgStyle: {
        background: colors.imgBack,
        margin: '0px 260px',
        padding: '20px',
        [theme.breakpoints.down('lg')]: {
            margin: '0px 200px',
        },
        [theme.breakpoints.down('md')]: {
            margin: '0px 160px',
        },
        [theme.breakpoints.down('sm')]: {
            margin: '0px 80px'
        },
        [theme.breakpoints.down('xs')]: {
            margin: '0px 0px',
            padding: '0px',
        },
        
        textAlign: 'center',
        borderRadius: '5px 5px 5px 5px/5px 5px 5px 5px',
        border: 'solid 1px #696969',
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
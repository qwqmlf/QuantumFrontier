import React from 'react'
import history from '../history';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    titleStyle: {
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
        margin: '10px 40px',
        [theme.breakpoints.down('xs')]:{
            margin: '20px',
        },
        lineHeight: '46px', 
        fontSize: '16pt', 
        fontWeight: 'bold',
        textAlign: 'left', 
    }, 
    itemStyle: {
        margin: '10px 40px',
        fontSize: '14px',
        [theme.breakpoints.down('xs')]:{
            margin: '20px',
        },
    },  
}));


function HomeIndexItems(props) {
    const classes = useStyles();
    const handleTonNxtPage = () => {
        history.push(props.item.link)
    }
    return (
        <div>
            <div className={classes.stitleStyle} onClick={handleTonNxtPage}>
                <span>{props.item.title}</span>
            </div>
            <div className={classes.itemStyle}>
                <p>
                    {props.item.description}
                </p>
            </div>
        </div>
    )
}

export default HomeIndexItems;
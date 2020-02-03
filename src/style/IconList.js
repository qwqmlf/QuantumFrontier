import React from 'react'
import history from '../history';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

//Icon
import HomeIcon from '@material-ui/icons/Home';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import BallotIcon from '@material-ui/icons/Ballot';
import NotesIcon from '@material-ui/icons/Notes';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';



const colors = {
    background: '#181B21',
    h1: '#fff',
    text: '#BFBFBF',
    icon: '#BFBFBF',
}

const useStyles = makeStyles(theme =>({
    content: {
        color: colors.text,
    },
    iconButton: {
        color: colors.icon,
    },
}));

function IconList() {
    const classes = useStyles();

    // swich button functions
    const handleToHomePage = () => {
        history.push('/QuantumFrontier/home')
    }
    const handleToMnistPage = () => {
        history.push('/QuantumFrontier/mnist')
    }
    const handleToCompetitionPage = () => {
        history.push('/QuantumFrontier/tutorial')
    }
    const handleToArticlePage = () => {
        history.push('/QuantumFrontier/article')
    }
    const handleToProjectPage = () => {
        history.push('/QuantumFrontier/project')
    }

    return (
        <div className={classes.content}>
            <List>
                <ListItem button key={'Home'} onClick={handleToHomePage} >
                    <ListItemIcon>
                    <HomeIcon className={classes.iconButton}/>
                    </ListItemIcon>
                    <ListItemText primary={'Home'} />
                </ListItem>
                <ListItem button key={'Q-MNIST'} onClick={handleToMnistPage} >
                    <ListItemIcon>
                    <BorderColorIcon className={classes.iconButton} />
                    </ListItemIcon>
                    <ListItemText primary={'Q-MNIST'} />
                </ListItem>
                <ListItem button key={'Tutorial'} onClick={handleToCompetitionPage} >
                    <ListItemIcon>
                    <BallotIcon className={classes.iconButton} />
                    </ListItemIcon>
                    <ListItemText primary={'Tutorial'} />
                </ListItem>
                <ListItem button key={'Web Article'} onClick={handleToArticlePage} >
                    <ListItemIcon>
                    <NotesIcon className={classes.iconButton} />
                    </ListItemIcon>
                    <ListItemText primary={'Web Article'} />
                </ListItem>
                {/* <ListItem button key={'About project'} onClick={handleToProjectPage} >
                    <ListItemIcon>
                    <LaptopMacIcon className={classes.iconButton} />
                    </ListItemIcon>
                    <ListItemText primary={'About project'} />
                </ListItem> */}
            </List>
        </div>
    )
}


export default IconList;
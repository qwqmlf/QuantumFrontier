import React from 'react'
import history from '../history';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Icon
import GroupIcon from '@material-ui/icons/Group';
import MailIcon from '@material-ui/icons/Mail';
import WavesIcon from '@material-ui/icons/Waves';


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

const handleToGroupPage = () => {
    history.push('/QuantumFrontier/member')
}


function SubIconList() {
    const classes = useStyles();

    return (
        <div className={classes.content} >
            <List>
                <ListItem button key={'Member'} onClick={handleToGroupPage}>
                    <ListItemIcon>
                        <GroupIcon className={classes.iconButton} />
                    </ListItemIcon>
                    <ListItemText primary={'Member'} />
                </ListItem>
            </List>
            <List>
                <ListItem button key={'Contact us'}>
                    <ListItemIcon>
                        <MailIcon className={classes.iconButton} />
                    </ListItemIcon>
                    <ListItemText primary={'Contact us'} />
                </ListItem>
            </List>
            <List>
                <ListItem button key={'About AQUA Lab'}>
                    <ListItemIcon>
                        <WavesIcon className={classes.iconButton} />
                    </ListItemIcon>
                    <ListItemText primary={'About AQUA Lab'} />
                </ListItem>
            </List>
        </div>
    )
}

export default SubIconList;
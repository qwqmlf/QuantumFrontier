import React from 'react'
import history from '../history';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme =>({
    card: {
        background: '#444',
        color: '#fff',
        height: '400px', 
        position: 'relative', 
        [theme.breakpoints.down('lg')]: {
            maxWidth: '270px',
            minWidth: '100px',
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '230px',
            minWidth: '100px',
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '500px',
            minWidth: '200px',
        },
    },
    desctiption: {
        // height: '80%', 
    },
    media: {
        textAlign: 'center',
        height: '180px',
        [theme.breakpoints.down('sm')]: {
            height: '140px',
        },
        [theme.breakpoints.down('xs')]: {
            height: '240px',
        },
    },
    button: {
        position: 'absolute', 
        bottom: '0', 
    },
}));

function CardItems(props) {
    const classes = useStyles();

    const handleTonNxtPage = () => {
        history.push(props.item.link)
    }

    return (
        <div>
            <Card className={classes.card}>
                <CardActionArea  onClick={handleTonNxtPage}>
                    <div className={classes.media}>
                        <img src={props.item.img} 
                            alt='image'　
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.item.title}
                        </Typography>
                        <Typography variant="body2"  component="p">
                            {props.item.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.button}>
                    {/* <Button size="small" color="primary">
                        Share
                    </Button> */}
                    <Button size="small" color="primary" onClick={handleTonNxtPage}>
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default CardItems;
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const colors = {
    background: '#262626',
    h1: '#fff',
    h2: '#fff',
    text: '#fff',
    link: '#0033cc',
    icon: '#BFBFBF',
}

const sizes = {
    title: '36pt',
    subtitle: '24pt',
    textsize: '18px',
    margin: '20px',
    padding: '20px',
}

const useStyles = makeStyles(theme =>({
    contentStyle: {
        background: colors.background,
        color: colors.text,
        padding: '10px',
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            padding: sizes.padding,
            display: 'block',
        },
    },
    img: {
        width: '300px',
        height: '400px',
        objectFit: 'contain',
        [theme.breakpoints.down('xs')]: {
            width: '300px',
            height: '200px',
        },
    },
    description: {
        padding: '10px',
    },
    name: {
        fontSize: sizes.title,
        fontColor: colors.h1,
    },
    institution: {
        fontSize: sizes.subtitle,
        fontColor: colors.h2,
    },
    keyword: {
        paddingTop: sizes.padding,
        fontSize: sizes.textsize,
        fontColor: colors.h2,
    },
    sns: {
        padding: sizes.padding,
        fontSize: sizes.textsize,
        fontColor: colors.h2,
    },
  }));


function MenberCardItem(props) {
    const classes = useStyles()

    return (
        <div className={classes.contentStyle}>
            <img src={props.item.img} 
                alt='image'　
                className={classes.img}
            />
            <div className={classes.description}>
                <div className={classes.name}>
                    {props.item.name}
                </div>
                
                <div className={classes.institution}>
                    {props.item.institution}
                </div>

                <div className={classes.keyword}>
                    <div>研究キーワード</div>
                    {props.item.keywords}
                </div>
                <div className={classes.sns}>
                    {props.item.sns}
                </div>
            </div>
        </div>
    )
}

export default MenberCardItem;
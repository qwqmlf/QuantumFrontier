import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import slideFinal from './slideFinal.js';


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
    button: {
        margin: theme.spacing(1),
        color: colors.icon,
    },
    icon: {
        margin: '0px 0px 0px 10px',
        color: colors.button
    },
}));

function MnistItem(){
    const classes = useStyles();

    return (
        <div>
            <div className={classes.titleStyle}>
                <span>プロジェクトについて</span>
            </div>
            <div className={classes.itemStyle}>
                <p>
                    <span>本プロジェクトについて、その起源や開発状況な度を紹介するスライドををまとめております。</span>
                </p>
                <p><a href='https://github.com/qwqmlf'>githubのレポジトリ</a></p>            
                <p><a href="https://www.slideshare.net/mobile/RyosukeSatoh/mitou-qwgc">要素技術に関するスライド</a></p>
                <p><a href='https://docs.google.com/presentation/d/1TainXdVJMS_dBkJ-yUUJELs36sJUJ030RXcexuf2tUw/edit?usp=sharing'>未踏プロジェクト最終発表スライド</a></p>
            </div>
            <br />
            
            <slideFinal />

        </div>
    )
}


export default MnistItem;

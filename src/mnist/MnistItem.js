import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import ReactPlayer from 'react-player'
import Canvas from './Canvas.js';

import expVideo from '../Videos/exp.mp4';
import handwritenum from '../img/0-9.png';

const colors = {
    background: '#262626',
    h1: '#fff',
    text: '#fff',
    icon: '#BFBFBF',
    imgBack: '#fff',
    canvasBack: '#444',
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
        fontSize: '14px',
        fontFamily: 'Quicksand YuGothic HiraginoKakuGothic Meiryo Osaka MSPGothic sansSerif', 
    }, 
    imgStyle: {
        background: colors.imgBack,
        margin: '0px 260px',
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
            margin: '0px 40px',
        },
        padding: '20px',
        textAlign: 'center',
        borderRadius: '5px 5px 5px 5px/5px 5px 5px 5px',
        border: 'solid 1px #696969',
    },
    canvasStyle: {
        background: colors.canvasBack,
        width: '350px',
        padding: '20px',
        margin: 'auto',
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
    video: {
        margin: '20px',
    },
}));

function MnistItem(){
    const classes = useStyles();

    return (
        <div>
            <div className={classes.titleStyle}>
                <span>量子手書き文字認識</span>
            </div>
            <div className={classes.itemStyle}>
                <p>
                    <span>本プロジェクトにて開発された量子変分法を用いた教師あり学習アルゴリズムを用いた、手書き文字認識プログラムを体験することができます。</span>
                </p>
                <p>    
                    <span></span>
                    
                </p>
            </div>
            <div className={classes.video}>
                <center>
                    <ReactPlayer url={expVideo} playing />
                </center>
            </div>

            <div className={classes.stitleStyle}>
                <span>手書き文字を入力</span>
            </div>
            <div className={classes.itemStyle}>
                <p>
                     <span>実際に下のボックス内に数字を書き込んで見ましょう！</span>
                     <span>0〜９の中から好きな数字を選んでください。</span>
                     <span>ボックス内でクリックした状態で書き込むことができます。</span>
                </p>
            </div>
            <div className={classes.canvasStyle}>
                <Canvas />
            </div>

            <div className={classes.stitleStyle}>
                <span>データセット：MNIST</span>
            </div>
            <div className={classes.imgStyle}>
                <img src={handwritenum} 
                    alt='mnistimg'　
                    align='center' 
                    style={{
                        width: '40%',
                        // margin: '0px 60px'
                    }} 
                />  
            </div>
            <div className={classes.itemStyle}>
                <p>  
                    <span>MNISTとは手書き文字を扱うデータセットです。</span>
                </p>
                <p>
                     <span>今回は手書き数字のデータで学習を進めた進めた判別器を用いて、みなさんの手書き数字を認識し10通りの数字から判別を行います。</span>
                </p>
            </div>
        </div>
    )
}


export default MnistItem;

import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import HomeIndex from './HomeIndex.js';


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
}));

function HomeItem(props){
    const classes = useStyles();

    return (
        <div>
            <div className={classes.titleStyle}>
                <span>Welcome to Quantum Frontier</span>
            </div>
            <div className={classes.itemStyle}>
                <p>
                    Quantum Fontierは量子コンピューティングの最先端の研究と社会をつなぐためのツールとして開発されました。
                </p>
                <p>
                    開発、実装、実問題への応用を通して得られた知見を、Webページ上でチュートリアルや学習用教材とともにご紹介しています。
                    学習教材では、量子コンピューティングの基礎的な内容から、新たに開発された量子機械学習アルゴリズムまでを学ぶことができます。
                    併せて、簡単なチュートリアルやアルゴリズムのデモを通じて現状の技術がどの程度のものなのかを肌で体感していただけます。
                </p>
            </div>
            <div className={classes.titleStyle}>
                <span>Index</span>
            </div>

            <HomeIndex />
            
        </div>
    )
}


export default HomeItem;

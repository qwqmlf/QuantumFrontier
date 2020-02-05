import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 


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
        },
        padding: '20px',
        textAlign: 'center',
        borderRadius: '5px 5px 5px 5px/5px 5px 5px 5px',
        border: 'solid 1px #696969',
    },
    list: {
        padding: '10px',
        fontFamily: 'YuGothic',
        fontWeight: 'bold',
    },
}));

function ArticleIntroduction() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.titleStyle}>
                <span>Quantum Articles</span>
            </div>
            <div className={classes.itemStyle}>
                <p>
                    <span>このページでは量子機械学習を学ぶためのコンテンツが用意されています。</span>
                    <span>内容は、Section1の量子コンピュータの簡単なおさらいから、Section2では量子機械学習(QML)・量子ウォーク(QW)の基礎知識、そしてSection3では本プロジェクトから生まれた新しい量子機械学習のメソッドまでを紹介します。</span>
                </p>
            </div>

            <div className={classes.stitleStyle}>
                <span>Section 1</span>
            </div>
            <div className={classes.itemStyle}>
                <p>
                    <span>Section1では量子コンピュータの基礎的な知識を簡単に解説しています。</span>
                    <span>１ぺージは「量子ビット」、考え中...。</span>
                    <span>続く２ぺージは「量子計算」の基礎的な範囲から</span>
                    <span>そして３ぺージは...</span>
                </p>
                <ul>
                    <li className={classes.list}>Quantum Information for Beginners 1</li>
                    <li className={classes.list}>Quantum Information for Beginners 2</li>
                    <li className={classes.list}>Quantum Information for Beginners 3</li>
                </ul>
            </div>
            <div className={classes.stitleStyle}>
                <span>Section 2</span>
            </div>
            <div className={classes.itemStyle}>
                <ul>        
                    <li className={classes.list}>Introduction of Quantum Machine Learning</li>
                    <li className={classes.list}>Application of Quantum Machine Learning</li>
                </ul>
            </div>
            <div className={classes.stitleStyle}>
                <span>Section 3</span>
            </div>
            <div className={classes.itemStyle}>
                <ul>
                    <li className={classes.list}>Quantum Support Vector Machine</li>
                    <li className={classes.list}>Quantum Walk and Graph classification</li>
                </ul>
            </div>
        </div>
    )
}
export default ArticleIntroduction;
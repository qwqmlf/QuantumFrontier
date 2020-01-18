import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles(theme => ({
    titleStyle: {
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
        margin: '10px 60px',
        [theme.breakpoints.down('740')]: {
            margin: '10px 40px',
        },
        fontSize: '14px',
        fontFamily: 'Quicksand YuGothic HiraginoKakuGothic Meiryo Osaka MSPGothic sansSerif', 
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
                    <span>そして３ぺージは「量子アルゴリズム」をテーマとし、代表的な「Shorのアルゴリズム」、「Groverのアルゴリズム」を中心に量子アルゴリズムによる量子加速や、さらには実現に向けた課題などについて解説しています。</span>
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
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Gist from 'super-react-gist';

const colors = {
    background: '#262626', 
    resultBack: '#f2f2f2',
    h1: '#fff', 
    text: 'fff', 
    resultText: '#000',
    icon: 'BFBFBF'
}

const useStyles = makeStyles(theme => ({
    root: {
    },
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
    imgStyle: {
        height: '360px',
        width: '500px',
    },
    gistStyle: {
        margin: '40px',
        [theme.breakpoints.down(740)]: {
            margin: '10px'
        },
    },
}));


function TutorialItem() {
    const classes = useStyles();
    
    return (
        <div>
            <div className={classes.titleStyle}>
                <span>QW Graph Classifier</span>
            </div>
            <div className={classes.stitleStyle}>
                <span>量子ウォークグラフ分類器</span>
            </div>
            <div className={classes.itemStyle}>
                <p>
                    <span>本プロジェクトにて開発された、量子ウォークを用いたグラフデータの分類メソッドを実データを用いて解説していきます。</span>
                </p>
                <p>    
                    <span>特定のグラフの構造については量子ウォークを用いることで、古典手法による特徴抽出に対して自乗加速を得られることが知られています。</span>
                    <span>この理論に基づき、私たちは今回量子ウォークによるグラフデータの特徴抽出と抽出したデータを量子回路上で分類する量子機械学習アルゴリズムの開発を行いました。</span>
                    <span>このアルゴリズムは理論的な応用だけでなく、化学物質の構造的分類などの実問題に対する新たなアプローチを可能にします。</span>
                </p>
            </div>
            <div className={classes.stitleStyle}>
                <span>データセット：MUTAG</span>
            </div>
            <div className={classes.itemStyle}>
                <p>
                    <span>今回はMUTAGというグラフ構造をもつデータを用いた、量子機械学習。</span>
                    <span>MUTAGは、生物の遺伝情報に変化を引き起こす作用を有する物質である、変異原（mutagen）を取り扱うデータセットです。</span>
                    <span>このデータセットを用いて、グラフ分類のための量子機械学習アルゴリズムの解説を行なっていきます。</span>
                </p>
            </div>
            <div className={classes.titleStyle}>
                <span>Tutorial</span>
            </div>

            <div className={classes.gistStyle}>
                <Gist url='https://gist.github.com/rum-yasuhiro/1af8dfcf98a8a98beda4770b5e24f468' />
            </div>
        </div>
    )
}

export default TutorialItem;
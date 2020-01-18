import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paragraph: {
        padding: '60px 160px',
        color: '#999',
        fontFamily: 'Arial Quicksand 游ゴシック体 YuGothic ヒラギノ角ゴシックPro HiraginoKakuGothicPro メイリオ Meiryo Osaka ＭＳＰゴシック MSPGothic sansSerif',
        [theme.breakpoints.down('md')]: {
            padding: '60px 100px'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '60px 60px'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '60px 30px'
        },
    },
}));

function TitleDescription() {
    const classes = useStyles();

    return (
        <div className={classes.paragraph}>
            <h1>Quantum Age</h1>
            <p>
            量子コンピュータの現状と将来の可能性を知ってもらうべく本プロジェクトは始まりました。
            このサービスを通して量子コンピュータをより身近に感じることができるでしょう！
            </p>
        </div>
    )
}
export default TitleDescription;
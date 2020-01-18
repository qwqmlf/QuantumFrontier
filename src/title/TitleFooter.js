import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import member from '../img/member.JPG';

const useStyles = makeStyles(theme => ({
    root: {
        height: '1460px',
        position: 'relative',
        bottom: '0',
        marginTop: '100px', 
        fontFamily: 'Quicksand 游ゴシック体 YuGothic ヒラギノ角ゴシックPro HiraginoKakuGothicPro メイリオ Meiryo Osaka ＭＳＰゴシック MSPGothic sansSerif',
    },
    content: {
        height: '750px',
        background: '#222', 
        paddingTop: '140px', 
        textAlign: 'center',
    },
    name: {
        color: '#666',
        fontSize: 'large',
    },
    info: {
        color: '#666',
        fontSize: 'large',
    },
    imgspace: {
        overflow: 'hidden',
        width: '100%', // トリミングしたい枠の幅
        height: '510px', // トリミングしたい枠の高さ
        position: 'center',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
        },
    },
    img: {
        left: '50%',
        top: '50%',  
        width: '100%',
        height: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
            height: '100%',
        },
    },
    bottom: {
        height: '200px',
        textAlign: 'center',
        paddingTop: '150px', 
        background: '#222', 
        color: '#666', 
    },
    styleFacebook: {
        color: '#fff',
    }, 
    styleTwitter: {
        color: '#fff',
    },
}));

function TitleFooter() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <div className={classes.name}>
                    2018-2020
                    <br />
                    <br />
                    <br />
                    <br />
                    Shin Nishio
                    <br />
                    <br />
                    Ryosuke Satoh
                    <br />
                    <br />
                    Yasuhiro Ohkura
                    <br />
                    <br />
                    <br />
                </div>
                <div className={classes.info}>
                    <br />
                    <br />
                    <br />
                    All Rights Reserved.
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
                <br />
                <br />
            </div>
            <div className={classes.imgspace}>
                <img
                    src={member}
                    className={classes.img}
                />
            </div>
            <div className={classes.bottom}>
                {/* &copy; */}
                
                <a href="mailto:parton@sfc.wide.ad.jp">お問い合わせ</a>
            </div>
        </div>
    )
}

export default TitleFooter;
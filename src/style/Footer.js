import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import member from '../img/member.JPG';

const colors = {
    background: '#222', 
    text: '#666', 
    link: '#003d99'
}
const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        bottom: '0',
        marginTop: '100px', 
        fontFamily: 'Quicksand 游ゴシック体 YuGothic ヒラギノ角ゴシックPro HiraginoKakuGothicPro メイリオ Meiryo Osaka ＭＳＰゴシック MSPGothic sansSerif',
        
        marginLeft: '240px',
        [theme.breakpoints.down('md')]: {
            marginLeft: '70px',
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: '57px',
        },
    },
    content: {
        height: '1000px',
        background: colors.background, 
        paddingTop: '140px', 
        textAlign: 'center',
    },
    name: {
        color: colors.text,
        fontSize: 'large',
    },
    info: {
        color: colors.text,
        fontSize: 'large',
    },
    imgspace: {
        position: 'center',
    },
    img: {
        width: '100%',
        height: '100%',
    },
    bottom: {
        bottom: '0',
        height: '100%',
        textAlign: 'center',
        paddingTop: '100px', 
        background: colors.background, 
        color: colors.text, 
    },
    link: {
        color: colors.link,
    },
}));

function Footer() {
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
                    This project supported by IPA.
                    <br />
                    <br />
                    <br />
                    <br />
                    <span>お問い合わせ</span>
                    <br/>
                    <a href="mailto:parton@sfc.wide.ad.jp" className={classes.link}> mailto:parton@sfc.wide.ad.jp</a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className={classes.imgspace}>
                    <img
                        src={member}
                        className={classes.img}
                    />
                    </div>
                </div>
            </div>
            
        </div>
    )
}


export default Footer;
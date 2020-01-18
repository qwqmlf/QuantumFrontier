import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import TitleFace from './TitleFace.js';
import TitleDescription from './TitleDescription.js';
import TitleCards from './TitleCards.js';
import TitleFooter from './TitleFooter.js';

const useStyles = makeStyles(theme => ({
    root: {
        fontFamily: 'Quicksand 游ゴシック体 YuGothic ヒラギノ角ゴシックPro HiraginoKakuGothicPro メイリオ Meiryo Osaka ＭＳＰゴシック MSPGothic sansSerif',
    },
    Backgound: {
        background: '#222',
    },
    cardStyle: {
        padding: '30px 60px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        [theme.breakpoints.down('md')]: {
            padding: '30px 0px'
        },
    },
}));

function Title() {
    const classes = useStyles();

    return (
        <div>
            <TitleFace />
            <div className={classes.Backgound}>
                <div className={classes.paragraph} >
                    <TitleDescription />
                </div>
            </div>
            <div className={classes.cardStyle}>
                    <TitleCards />
            </div>
            <TitleFooter />
        </div>
    )
}

export default Title;
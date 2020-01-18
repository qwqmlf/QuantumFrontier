import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';


import MiniDrawer from '../style/MiniDrawer.js';
import Footer from '../style/Footer.js';


const colors = {
    background: '#181B21',
    h1: '#fff',
    text: '#BFBFBF',
    icon: '#BFBFBF',
}

const useStyles = makeStyles(theme => ({
    root: {
      marginTop: '63px',
      marginLeft: '80px',
      marginRight: '10px',
        [theme.breakpoints.down('xs')]: {
            marginTop: '55px',
            marginLeft: '70px',
        },
    },
    content: {
      margin: 'auto',
      width: '870px',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      marginBottom: '20px',
      borderRadius: '5px 5px 5px 5px/5px 5px 5px 5px',
      fontFamily: 'Quicksand 游ゴシック体 YuGothic ヒラギノ角ゴシックPro HiraginoKakuGothicPro メイリオ Meiryo Osaka ＭＳＰゴシック MSPGothic sansSerif',
    },
    cardStyle: {
        margin: 'auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
  }));

function Project(){
    const classes = useStyles()

    return (
        <div>
            <MiniDrawer />
            <div className={classes.root} >
                <div className={classes.content}>
                   
                
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Project;

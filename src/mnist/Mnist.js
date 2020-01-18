import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import MiniDrawer from '../style/MiniDrawer.js';
import Footer from '../style/Footer.js';
import MnistHeader from './MnistHeader.js';
import MnistItem from './MnistItem.js';

const colors = {
  background: '#262626',
  h1: '#fff',
  text: '#fff',
  icon: '#BFBFBF',
}

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '63px',
    marginLeft: '250px',
    marginRight: '10px',
    [theme.breakpoints.down('md')]: {
        marginTop: '63px',
        marginLeft: '80px',
        marginRight: '10px',
    },
    [theme.breakpoints.down('xs')]: {
        marginTop: '55px',
        marginLeft: '57px',
        marginRight: '0px',
    },
  },
  content: {
    margin: 'auto',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    marginBottom: '20px',
    borderRadius: '5px 5px 5px 5px/5px 5px 5px 5px',
    fontFamily: 'Quicksand 游ゴシック体 YuGothic ヒラギノ角ゴシックPro HiraginoKakuGothicPro メイリオ Meiryo Osaka ＭＳＰゴシック MSPGothic sansSerif',
  },
  MnistItems: {
    background: colors.background,
    color: colors.text,
    marginBottom: '10px',
    minHeight: '200px',
    borderRadius: '5px 5px 5px 5px/5px 5px 5px 5px',
    border: 'solid 1px #696969',
    fontFamily: 'Quicksand 游ゴシック体 YuGothic ヒラギノ角ゴシックPro HiraginoKakuGothicPro メイリオ Meiryo Osaka ＭＳＰゴシック MSPGothic sansSerif',
},
}));

function Mnist(){
  const classes = useStyles()
  return (
    <div>
      <MiniDrawer />
      <div className={classes.root} >
        <div className={classes.content}>
          <MnistHeader />
          <div className={classes.MnistItems}>
            <MnistItem />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Mnist;

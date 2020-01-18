import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


import MiniDrawer from '../style/MiniDrawer.js';
import Footer from '../style/Footer.js';

import MemberHeader from './MemberHeader.js';
import MemberCard from './MemberCard.js';

const colors = {
  background: '#181B21',
  h1: '#fff',
  text: '#BFBFBF',
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
  cardStyle: {
      margin: 'auto',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
  },
}));

function Member(){
  const classes = useStyles()

  return (
    <div>
      <MiniDrawer />
      <div className={classes.root} >
        <div className={classes.content}>
          <MemberHeader />
            <MemberCard />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Member;

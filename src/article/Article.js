import React from 'react'
import history from '../history';

import {Router, Route} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import ArticleHeader from './ArticleHeader';
import ArticleIntroduction from './ArticleIntroduction';
// import Qi_for_beginners1 from './articles/Qi_for_beginners1';
import Qi_for_beginners1 from './articles/Qi_for_beginners1';
import Qi_for_beginners2 from './articles/Qi_for_beginners2';
import QauntumWalks from './articles/QuantumWalks.js';
import Qwnn_graph_classification from './articles/Qwnn_graph_classification';

import ArticleCards from './ArticleCards';

import MiniDrawer from '../style/MiniDrawer.js';
import Footer from '../style/Footer.js';


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
      fontSize: '14px',
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
    pageStyle: {
        background: colors.background,
        color: colors.text,
        marginBottom: '10px',
        minHeight: '200px',
        borderRadius: '5px 5px 5px 5px/5px 5px 5px 5px',
        border: 'solid 1px #696969',
        fontFamily: 'Quicksand 游ゴシック体 YuGothic ヒラギノ角ゴシックPro HiraginoKakuGothicPro メイリオ Meiryo Osaka ＭＳＰゴシック MSPGothic sansSerif',
    },
    cardStyle: {
        margin: 'auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
}));

function Article(){
    const classes = useStyles();

    return (
        <div>
            <MiniDrawer />
                <div className={classes.root}>
                    <div className={classes.content}>
                        <ArticleHeader />
                        <div className={classes.pageStyle}>
                            <Router history={history}>
                                <Route exact path={'/QuantumFrontier/article'} component={ArticleIntroduction}/>
                                <Route path={'/QuantumFrontier/article/qi_for_beginners1'} component={Qi_for_beginners1} />
                                <Route path={'/QuantumFrontier/article/qi_for_beginners2'} component={Qi_for_beginners2} />
                                <Route path={'/QuantumFrontier/article/QauntumWalks'} component={QauntumWalks} />
                                {/* <Route path={'/QuantumFrontier/article/introduction_of_qml'} component={Introduction_of_qml} /> */}
                                {/* <Route path={'/QuantumFrontier/article/application_of_qml'} component={Application_of_qml} /> */}
                                {/* <Route path={'/QuantumFrontier/article/qsvm'} component={Qsvm} /> */}
                                <Route path={'/QuantumFrontier/article/qwnn_graph_classification'} component={Qwnn_graph_classification} />
                            </Router>
                        </div>
                        <div className={classes.cardStyle}>
                            <ArticleCards />
                        </div>
                    </div>
                </div>
                <Footer />
        </div>
    )
}

export default Article;

import React, { Component } from 'react';
import CardItems from '../style/CardItems';

import waveslid from '../img/waveslid.jpg';
import datacity from '../img/datacity.jpg';
import qcarch from '../img/qcarch.jpg';
import network from '../img/network.jpeg';



class ArticleCards extends Component {
    state = {
        items: [
            {
                title: '量子コンピュータ基礎',
                description: '量子コンピュータについて概観。計算機としての位置付けや、その特性について説明します。',
                img: waveslid,
                link: '/QuantumFrontier/article/qi_for_beginners1'
            },
            {
                title: '量子コンピュータ基礎２',
                description: '量子回路の基礎を中心に、簡単な量子計算についてご紹介します。',
                img: datacity,
                link: '/QuantumFrontier/article/qi_for_beginners2', 
            },
            {
                title: '量子ウォーク',
                description: '量子ウォーク(QW)について一般的な内容から、提案手法：量子ウォークグラフ分類で用いられたケースについてご紹介します。',
                img: qcarch,
                link: '/QuantumFrontier/article/QauntumWalks', 
            },
            // {
            //     title: 'Introduction of QML',
            //     description: 'QMLの説明。QMLの説明。QMLの説明。QMLの説明。QMLの説明。QMLの説明。QMLの説明。QMLの説明。QMLの説明。QMLの説明。QMLの説明。QIBの説明。',
            //     img: junbi,
            //     link: '/QuantumFrontier/article/application_of_qml', 
            // },
            // {
            //     title: 'Introduction of Quantum Walk',
            //     description: 'QMLの説明。QMLの説明。QMLの説明。QMLの説明。QMLの説明。QMLの説明。QMLの説明。QMLの説明。QMLの説明。QMLの説明。QMLの説明。QIBの説明。',
            //     img: junbi,
            //     link: '/QuantumFrontier/article/introduction_of_qml', 
            // },
            // {
            //     title: 'QSVM',
            //     description: 'QSVMの説明。QSVMの説明。QSVMの説明。QSVMの説明。QSVMの説明。QSVMの説明。QSVMの説明。QSVMの説明。QSVMの説明。QSVMの説明。QSVMの説明',
            //     img: junbi,
            //     link: '/QuantumFrontier/article/qsvm', 
            // },
            {
                title: '量子ウォークグラフ分類アルゴリズム',
                description: '提案手法：量子ウォークグラフ分類(QWGC)アルゴリズムに関する解説記事です。',
                img: network,
                link: '/QuantumFrontier/article/qwnn_graph_classification', 
            },
        ]
    }
    render() {
        return this.state.items.map((item)=>(
            <span style={cardStyle}>
                <CardItems item={ item } />
            </span>
        ));
    }
}

const cardStyle = {
    margin: '5px', 
}

export default ArticleCards;
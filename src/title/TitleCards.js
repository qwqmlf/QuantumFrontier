import React, { Component } from 'react';
import TitleCardItems from './TitleCardItems';

import articleImg from '../img/papers.jpeg';
import mnistImg from '../img/pen.jpeg';
import tutorialImg from '../img/blueblocks.jpeg';



class TitleCards extends Component {
    state = {
        items: [
            {
                title: 'Online Article',
                description: '量子計算の基礎から、最新のアリゴリズムまで7つのWEB記事で学ぶことができます。',
                img: articleImg,
                link: '/article',
            },
            {
                title: 'Q-MNIST',
                description: '量子変分法を用いた手書き文字認識の体験ページです。実際にみなさんが書いた手書き数字を識別し判定する様子を見ることができます。',
                img: mnistImg,
                link: '/mnist',
            },
            {
                title: 'Tutorial',
                description: 'グラフデータを分類する量子機械学習アルゴリズムのチュートリアルページです。',
                img: tutorialImg,
                link: '/tutorial',
            },
        ]
    }
    render() {
        return this.state.items.map((item)=>(
            <span style={cardStyle}>
                <TitleCardItems item={ item } />
            </span>
        ));
    }
}

const cardStyle = {
    margin: '5px', 
}

export default TitleCards;
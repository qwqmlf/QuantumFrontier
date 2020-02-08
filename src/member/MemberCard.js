import React, { Component } from 'react';

import MemberCardItem from './MemberCardItem.js';
import uuid from 'uuid';

import nishio from '../img/Nishio.png';
import satoh from '../img/satoh.JPG';
import ohkura from '../img/ohkura.png';

const colors = {
    background: '#262626',
    h1: '#fff',
    text: '#fff',
    icon: '#BFBFBF',
}

export class MemberCard extends Component {
    state = {
        items: [
            {
                id: uuid.v4(),
                name: '西尾真', 
                institution: '慶應義塾大学 総合政策学部',
                description: '',
                keywords: '量子コンパイラ、量子ウォーク',
                img: nishio, 
            },
            {
                id: uuid.v4(),
                name: '佐藤綾祐',
                institution: '慶應義塾大学 環境情報学部',
                description: '',
                keywords: '量子ウォーク、量子機械学習',
                img: satoh, 
            },
            {
                id: uuid.v4(),
                name: '大倉康寛',
                institution: '慶應義塾大学 総合政策学部',
                description: '',
                keywords: 'グローバーアルゴリズム',
                img: ohkura, 
            },
        ]   
    }

    render() {
        return this.state.items.map((item)=>(
            <span style={cardStyle}>
                <MemberCardItem item={ item } />
            </span>
        ));
    }
}


// styles
const cardStyle = {
    margin: '5px',
    borderRadius: '25px',
}

export default MemberCard;
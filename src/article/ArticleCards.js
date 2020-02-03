import React, { Component } from 'react';
import CardItems from '../style/CardItems';
import junbi from '../img/junbi.png';

import waveslid from '../img/waveslid.jpg';
import datacity from '../img/datacity.jpg';
import qcarch from '../img/qcarch.jpg';
import network from '../img/network.jpeg';



class ArticleCards extends Component {
    state = {
        items: [
            {
                title: 'QI for Beginners1',
                description: 'QIBの説明。QIBの説明。QIBの説明。QIBの説明。QIBの説明。QIBの説明。QIBの説明。QIBの説明。QIBの説明。QIBの説明。QIBの説明。QIBの説明。',
                img: waveslid,
                link: '/QuantumFrontier/article/qi_for_beginners1'
            },
            {
                title: 'QI for Beginners2',
                description: 'QIBの説明。QIBの説明。QIBの説明。QIBの説明。QIBの説明。QIBの説明。QIBの説明。QIBの説明。QIBの説明。QIBの説明。QIBの説明。QIBの説明。',
                img: datacity,
                link: '/QuantumFrontier/article/qi_for_beginners2', 
            },
            {
                title: 'QI for Beginners3',
                description: 'QIBの説明。QIBの説明。QIBの説明。QIBの説明。QIBの説明。QIBの説明。QIBの説明。QIBの説明。QIBの説明。QIBの説明。QIBの説明。QIBの説明。',
                img: qcarch,
                link: '/QuantumFrontier/article/qi_for_beginners3', 
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
                title: 'Quantum Walk・Graph classification',
                description: 'QWGCの説明。QWGCの説明。QWGCの説明。QWGCの説明。QWGCの説明。',
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
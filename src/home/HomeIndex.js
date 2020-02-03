import React, { Component } from 'react'
import HomeIndexItems from './HomeIndexItems.js';

export class HomeIndex extends Component {
    state = {
        items : [
            {
                title: 'Articles',
                description: '様々な方に量子コンピューティングの先端研究を学んでいただくことを目的に4本の記事を用意しました。量子コンピューティングの基礎から新たに開発されたアルゴリズムの解説まで、章ごとに順を追って学ぶことができます。',
                // img: '',
                link: '/QuantumFrontier/article',
            },
            {
                title: 'Quantum MNIST',
                description: '量子機械学習手法を用いた手書き文字の判定問題を体験することができます。量子変分法という手法を教師あり機会学習に応用し、実際に手書き数字を判定するためのするためのアルゴリズムを開発しました。今回のデモではMNISTという手書き数字のデータセットを機械学習に使用しています。このデータセットを使って量子計算機シミュレータ上で学習を行い得られたパラメータセットを用いて、実際にみなさんのが書いた手書き数字の判定を行います。',
                // img: '',
                link: '/QuantumFrontier/mnist',
            },
            {
                title: 'Tutorial of Quantum Walk Graph Classifier',
                description: '量子ウォークという手法を応用した新たな量子機械学習アルゴリズムについてチュートリアル形式で学ぶことができます。本ページではMUTAGというグラフデータセットを用いた実問題に取り組みます。Articleページでは理論的な学び、このTutorialページではコードを追うことで実践的な学びを達成することを目的としています。',
                // img: '',
                link: '/QuantumFrontier/tutorial',
            },
            {
                title: 'Project',
                description: '今回のプロジェクトについての詳細、今後の展望についてご紹介しております。',
                // img: '',
                link: '/QuantumFrontier/project',
            },
        ]
    }
    render() {
        return this.state.items.map((item)=>(
            <HomeIndexItems item={item} />
        ));
    }
}

export default HomeIndex;
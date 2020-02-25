import React, { Component } from "react";
import CardItems from "../style/CardItems.js";

import articleImg from "../img/papers.jpeg";
import mnistImg from "../img/pen.jpeg";
import tutorialImg from "../img/blueblocks.jpeg";
import projectImg from "../img/project.jpeg";

export class HomeCard extends Component {
  state = {
    items: [
      {
        title: "Online Article",
        description:
          "量子計算の基礎から、最新のアリゴリズムまで7つのWEB記事で学ぶことができます。",
        img: articleImg,
        link: "/QuantumFrontier/article"
      },
      {
        title: "Tutorial",
        description:
          "グラフデータを分類する量子機械学習アルゴリズムのチュートリアルページです。",
        img: tutorialImg,
        link: "/QuantumFrontier/tutorial"
      },
      // {
      //     title: 'Q-MNIST',
      //     description: '量子変分法を用いた手書き文字認識の体験ページです。実際にみなさんが書いた手書き数字を識別し判定する様子を見ることができます。',
      //     img: mnistImg,
      //     link: '/QuantumFrontier/mnist',
      // },
      {
        title: "About Project",
        description:
          "本プロジェクトに関する詳しい情報や、今後の展望についてご紹介いたします。",
        img: projectImg,
        link: "/QuantumFrontier/project"
      }
    ]
  };
  render() {
    return this.state.items.map(item => (
      <span style={cardStyle}>
        <CardItems item={item} />
      </span>
    ));
  }
}

const cardStyle = {
  margin: "5px"
};

export default HomeCard;

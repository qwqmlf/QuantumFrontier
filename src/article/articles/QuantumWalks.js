import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

//import images
import onedimrandomwalk from "../../img/random.png";
import onedimquantumwalk from "../../img/quantum_walk.png";
import triangle from "../../img/graph.png";
import stepoperator from "../../img/step_matrix.png";
import grovercoin from "../../img/grovercoin.png";
import u3coin from "../../img/u3.png";


const colors = {
    background: '#262626',
    h1: '#fff',
    text: '#fff',
    icon: '#BFBFBF',
    imgBack: '#fff',
}

const useStyles = makeStyles(theme => ({
    title: {
        color: colors.text,
        padding: '20px 0px 0px 20px', 
        margin: '40px',
        lineHeight: '46px', 
        fontSize: '24pt', 
        [theme.breakpoints.down('sm')]: {
            fontSize: '26pt',
            margin: '20px',
            lineHeight: '46px', 
        },
        [theme.breakpoints.down('xs')]: {
            padding: '0px', 
            fontSize: '16pt',
        },
        fontWeight: 'bold',
        textAlign: 'left', 
        borderBottom: 'groove 3px #C0C0C0', 
    }, 
    stitle: { 
        color: colors.text,
        margin: '10px',
        [theme.breakpoints.down('740')]: {
            margin: '10px 40px',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '0px', 
            margin: '20px',
        },
        lineHeight: '46px', 
        fontSize: '16pt', 
        fontWeight: 'bold',
        textAlign: 'left', 
    }, 
    itemStyle: {
        color: colors.text,
        margin: '10px 60px',
        [theme.breakpoints.down('740')]: {
            margin: '10px 40px',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '20px',
        },
        fontFamily: 'Quicksand YuGothic HiraginoKakuGothic Meiryo Osaka MSPGothic sansSerif', 
    }, 
    imgStyle: {
        background: colors.imgBack,
        textAlign: 'center',
        margin: '0px auto',
        padding: 'auto',
    },
    list: {
        padding: '10px',
        fontFamily: 'YuGothic',
        fontWeight: 'bold',
    },
    img: {
        width: "600px",
        [theme.breakpoints.down('sm')]: {
            width: "400px",
        },
        [theme.breakpoints.down('xs')]: {
            width: "200px",
        },
    },
    paragraph: {
        fontSize: '16pt',
        marginBottom: '40px',
        margin: '60px',
        [theme.breakpoints.down('xs')]: {
            margin: '10px',
        },
    },
}));



function QauntumWalks() {
    const classes = useStyles();
    
    return (
        <div>

            <div className={classes.title}>
                量子ウォーク
            </div>
            <div className={classes.paragraph}>
                <div className={classes.stitle}>
                    量子ウォークとは？
                </div>
                <p>
                    量子ウォークとは、2000年頃から非常に注目を浴びるようになってきた量子アルゴリズムで、様々なアルゴリズムやアプリケーションへの応用が期待されています。
                    よく比較されるアルゴリズムの一つとしてランダムウォーク と呼ばれるアルゴリズムがあります。
                    量子ウォークが提唱された当初は、「量子ランダムウォーク」とも呼ばれ、ランダムウォーク アルゴリズムの量子版というような位置付けがなされていました。
                    しかしながら、量子ウォークにはランダムウォークと非常に異なる性質が様々に発見され、「量子ウォーク」と呼ばれるようになっていきました。
                </p>
            </div>
            <div className={classes.paragraph}>
                <div className={classes.stitle}>
                    量子ウォークの種類
                </div>
                <p>
                    量子ウォークには大きく分けて2つの種類の量子ウォークがあります。一つ目が離散時間量子ウォーク、もう一つが連続時間量子ウォークです。
                    両者の共通点として、どちらも量子ウォーカーがどのように動いていくかという時間発展をシミュレーションしているという点があります。
                    実際にどのように各量子ウォーカーが進んでいくのかというと、離散時間量子ウォークの場合、 
                    <BlockMath math="\begin{aligned}\vert\psi_t\rangle = (U_{walk})^t\vert\psi_{0}\rangle\end{aligned}" /> 
                    となり、連続時間量子ウォークの場合 
                    <BlockMath math="\begin{aligned} \vert\psi_t\rangle = U_{walk}(\theta_t)\vert\psi_{0}\rangle\end{aligned}" /> というようになります。
                    ここで、
                    <InlineMath math="\vert\psi_t\rangle" />
                    の
                    <InlineMath math="t" />
                    時間後の量子ウォーカーの状態、
                    <InlineMath math="U_{walk}" />
                    というのが、量子ウォークの時間発展のオペレータ、
                    <InlineMath math="\theta_t" />
                    というのが、ある時間
                    <InlineMath math="t" />
                    に対応したパラメータ、
                    <InlineMath math="\vert\psi_0\rangle" />
                    が、量子ウォーカーが最初にどのような状態にあるのかという初期状態を表しています。
                    ここで、離散時間と連続時間の違いとしては、離散時間量子ウォークの場合は、1ステップ毎にオペレータをかけ続けることで時間発展をシミュレーションしているのに対し、連続時間量子ウォークの場合は、オペレータにおけるあるパラメータ
                    <InlineMath math="\theta_t" />
                    を調整していくことで時間発展のシミュレーションが可能になります。
                </p>
            </div>
            <div className={classes.paragraph}>
                <div className={classes.stitle}>
                    量子ウォークの性質
                </div>
                <p>
                    今回は例としてコイン量子ウォーク（もしくはコイン付き量子ウォーク）と呼ばれる、離散時間量子ウォークを紹介します。
                    その前に、ランダムウォーク がどういうものかを簡単に紹介します。

                </p>
            </div>
            <div className={classes.paragraph}>
                <div className={classes.stitle}>
                    （古典）ランダムウォークとは？
                </div>
                <p>
                    ランダムウォークと呼ばれるアルゴリズムは量子ウォークよりもずっと前に提唱されたアルゴリズムであり、実際に様々なアルゴリズムのサブルーチンとしても利用されています。
                    今回は一次元上のランダムウォークについて見ていきます。
                    一次元上のランダムウォークはある確率
                    <InlineMath math="p" />
                    で+1、 
                    <InlineMath math="(1-p)" />
                    で-1進むようなランダムウォークのことをいいます。
                    <InlineMath math="p=\frac{1}{2}" />
                    のときに関して、よくコイントスの結果で進んだり戻ったりするといった説明がされることもあります。
                </p>
                <div className={classes.imgStyle}>
                    <img src={onedimrandomwalk} className={classes.img} />
                </div> 
                <p>
                    一次元直線状のランダムウォークを非常に大きなステップ数(Figure1では100000)進めると、量子ウォーカーがある場所にいる確率は正規分布に近づいていきます。
                    これはつまり、どんどん進んでいくに連れて原点に戻ってくる確率が一番大きいということを示しています。
                </p>
            </div>
            <div className={classes.paragraph}>
                <div className={classes.stitle}>
                    コイン量子ウォークの性質
                </div>
                <p>
                    コイン量子ウォークでは、その名の通りコインというオペレータが存在します。
                    古典ランダムウォークと大きく異なる点の一つとして、量子ウォーカーの状態というのはある量子状態として表されます。
                    この大きな特徴として、量子ウォーカーがどこにいるのかということに関する情報は、観測を持ってして初めて得ることができます。
                    以下ではアダマールコインを用いた量子ウォークにおける確率分布を示します。
                    [引用元: Jasper Dingerink, Quantum walks of an atom in an optical lattice, 2016]
                </p>
                <div className={classes.imgStyle}>
                    <img src={onedimquantumwalk} className={classes.img} />
                </div>
                <p>
                    Figure2のように、ランダムウォークとは大きく異なる分布が現れていることがわかります。
                    これが量子ウォークが古典ランダムウォークと大きく異なる点の一つです。
                </p>
            </div>
            <div className={classes.paragraph}>
                <div className={classes.stitle}>
                    提案手法：量子ウォークグラフ分類アルゴリズムで利用した量子ウォークについて
                </div>
                <p>
                    今回開発したグラフの分類アルゴリズムでは、特徴量抽出の道具として量子ウォークを利用しています。
                    そのためグラフ上の量子ウォークというものを考える必要があります。
                    これまで見てきた例は全て一次元直線上の量子ウォークでしたが、これを二次元上でかつグラフの構造を踏まえた量子ウォークを考えなければなりません。
                    そこで、コイン量子ウォークでは2つのオペレータを用意します。
                    一つ目がステップオペレータ(
                        <InlineMath math="S" />
                        ), もう一つがコインオペレータ(
                            <InlineMath math="C" />
                            )です。
                    {/* 今回は
                    <span class="citation" data-cites="barr2013simulation"></span>
                    を利用します。 */}
                </p>
            </div>

            <div className={classes.paragraph}>
                <div className={classes.stitle}>
                    ステップオペレータ
                </div>
                <p>
                    ステップオペレータはグラフの情報を保持しています。
                    具体的には、グラフの隣接行列から生成されます。
                    例えば、下のようなグラフがあるとき、
                </p>
                <div className={classes.imgStyle}>
                    <img src={triangle} className={classes.img} />
                </div>
                <p>ステップオペレータは以下のような行列として表されます。</p>
                <div className={classes.imgStyle}>
                    <img src={stepoperator} className={classes.img} />
                </div>
                <p>
                    この行列の見方として、一行一列目はノード1の一つ目のリンク、二行二列目はノード1の2つ目のリンク...というように対応しています。
                    特定のノード間の接続があればその部分が1となり、なければ0というような行列になっています。
                </p>
            </div>
            <div className={classes.paragraph}>
                <div className={classes.stitle}>
                    コインオペレータ
                </div>
                <p>
                    今回のアルゴリズムの肝の部分であるコインオペレータについてご紹介します。
                    このオペレータは各ノードにおいて、量子ウォーカーがどのように遷移するのかという情報を保持しています。
                    また今回は、ノードから出ているリンクの数（次数）が、3以上の場合についてはグローバーコインと呼ばれるコインを、2については任意のユニタリが利用できるようになっています。
                </p>
            </div>
            <div className={classes.imgStyle}>
                <img src={grovercoin} className={classes.img}/>
            </div>
            <div className={classes.imgStyle}>
                <img src={u3coin} className={classes.img} />
            </div>

            <div className={classes.paragraph}>
                <div className={classes.stitle}>
                    グラフ上の量子ウォーク
                </div>
                <p>
                    以上のようなオペレータを用いて、実際にグラフ上の量子ウォークを定義していきます。
                    時刻
                    <InlineMath math="t" />
                    における量子ウォーカーは 
                    <BlockMath math="\begin{aligned} \vert\psi_t\rangle = (SC)^t|\psi_{0}\rangle\end{aligned}" /> 
                    のように表すことができます。
                    先ほどの
                    <InlineMath math="U_{walk}" />
                    の部分について、ステップとコインの内積として
                    <BlockMath math="SC" />
                    を定義し、それらを
                    <InlineMath math="t" />
                    回作用させることによって、時刻
                    <InlineMath math="t" />
                    における時間発展をシミュレートすることができます。
                </p>
            </div>
        </div>
    )
}

export default QauntumWalks;
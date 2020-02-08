import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './articles.css';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// import images
import bloch from "../../img/bloch.png";

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
        margin: '10px 60px',
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
        margin: '30px',
        [theme.breakpoints.down('sm')]: {
            margin: '10px',
        },
    },
}));

function Qi_for_beginners1() {
    const classes = useStyles();

    return (
        <div>

            <div className={classes.title}>
                量子コンピュータ基礎１
            </div>
            <div className={classes.paragraph}>
                
                <p>                
                    量子コンピュータ、それは果たしてどのようなコンピュータなのでしょうか。
                </p>
                <p>
                    計算機について語る上で、理想的な計算機(コンピュータ)のモデルとして定義される<a href='https://ja.wikipedia.org/wiki/%E3%83%81%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%B3%E3%82%B0%E3%83%9E%E3%82%B7%E3%83%B3'>チューリングマシン</a>があります。
                    ある計算機とこのチューリングマシンとの比較をすることで、その計算機(今回は量子コンピュータ)がどの程度のものなのかを知ることができます。
                    量子計算機のモデルの１つである量子チューリングマシンは、理想的な計算機であるチューリングマシンと全く同じ<a href='https://ja.wikipedia.org/wiki/%E8%A8%88%E7%AE%97%E5%8F%AF%E8%83%BD%E6%80%A7%E7%90%86%E8%AB%96'>計算可能性</a>(どんな問題を解くことができるか)をもつとされます。
                    すなわち、チューリングマシンで解くことができない問題は量子チューリングマシンでも解くことはできません。
                    しかし、チューリングマシンで解くことができる計算では、量子チューリングマシンはチューリングマシン以下になること、すなわち問題をより効率よく計算できる可能性があることが示されています。
                    また、量子チューリングマシンはチューリングマシンを簡単にエミュレート(動作の真似をすること)することも知られています。
                </p>

                <p>
                    量子コンピュータと呼ばれるものには量子回路型計算モデルを実現しようとしているもの他に量子アニーリング方式計算機などがあります。
                    量子ゲート方式は既存のコンピュータの汎用性を引き継ぎ、 さらに計算を効率化することを目標としています。
                    それに対し、 量子アニーリングは多体系を用いた系を使って問題を解こうとするものです。
                    このページでは量子ゲート方式の方を量子計算機と呼称します。
                </p>

                <p>現在世界では量子計算機開発の競争は日に日に拡大しています。世界中の研究室で量子計算機開発は続いており、表のような様々な物質の性質を用いた量子計算が研究されています。</p>
                
                <div className={classes.tblStyle}>
                    <div>
                        <table align="center">
                        <caption>様々な系による量子計算</caption>
                        <thead>
                        <tr class="header">
                        <th>量子系</th>
                        <th>研究機関などの例</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr class="odd">
                        <td>光</td>
                        <td>東大</td>
                        </tr>
                        <tr class="even">
                        <td>超伝導</td>
                        <td>東大、IBM、Google</td>
                        </tr>
                        <tr class="odd">
                        <td>シリコン核スピン</td>
                        <td>慶應義塾大学</td>
                        </tr>
                        <tr class="even">
                        <td>窒素空孔中心</td>
                        <td>横国大、筑波大、ウルム大</td>
                        </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
            <div className={classes.stitle}>
                量子力学的性質
            </div>
            <div className={classes.paragraph}>
            <p>
                量子力学を用いると何が今までのコンピュータ(量子情報科学者は敬意を込めて古典コンピュータと呼称する)や通信と違うのでしょうか。
                そもそも量子力学とは、電子や光子(フォトン)などミクロな領域から始まった物理学です(マクロな物体における量子力学の話は長くなるので今回は割愛します)。
                量子力学においては我々マクロな物体とは感覚的に異なる現象が多々起こります。
            </p>
            <p>
                例えば、量子力学では、観測という概念が非常に重要になります。
                古典力学では、初期値(例えば物体の位置や速度、加速度)がわかればその後の運動は基本的に予測できます(外部からの影響がない限り)。
                しかしながら量子力学では、観測するまでその後の推移は確定できません。
            </p>
            <p>
                量子力学の最も重要な現象(概念)として、重ね合わせと量子もつれという現象があります。
                量子計算機では、これらの現象を用いて量子ビットと呼ばれる情報単位を生成し、計算を行っています。
            </p>
            </div>
            <div className={classes.stitle}>
                量子ビット
            </div>
            <div className={classes.paragraph}>
                <p>
                    古典コンピュータでは、情報の最小単位としてビット(bit)を用います。
                    ビットは、0もしくは1の2通りの情報を表現することができます。
                    これを
                    <InlineMath math="n" />
                    個用意することによって、
                    <InlineMath math="2^n" />
                    の状態を表現することができます。
                    量子情報科学分野では、古典ビットと呼称します。
                    古典ビットは、物理的には主に電圧の高低差などを用います。
                    また、古典ビットはコピーすることができます。
                </p>
                <p>
                    それに対し、量子計算機は量子ビット(qubit)と呼ばれる情報の単位を用います。この量子ビットは、古典計算機のビットのように、二つの情報を表現することができます。この時、量子ビットでは、二つの直行するベクトル(2次元複素ベクトル空間での正規直交基底)を用いて情報を表現します。
                    また、量子分野ではよく、ベクトルをブラケット記法という記法で表現します。
                    ブラケット記法では、任意のベクトルは
                    <InlineMath math="\frac{\theta}{\rangle}" /> 
                    (ケットと読みます)のような記号に入れて表現します。
                    例えば、古典ビットにおける0と1に相当する単純な状態は、
                    
                   <BlockMath 
                   math="\vert 0\rangle \equiv \bigg(
                            \begin{array}{r}
                            1  \\
                            0  \\
                            \end{array}
                            \bigg)
                            \quad
                            |1\rangle \equiv \bigg(
                            \begin{array}{r}
                            0  \\
                            1  
                            \end{array}
                            \bigg)" />
                    のように表現されます。ケットの中に入る数字もしくはアルファベットは、特に意味はなく、ラベルづけ(ベクトルに名前をつける)として機能します。
                    つまり、
                   <BlockMath math="\vert ? \rangle \equiv \bigg(
                        \begin{array}{r}
                        ????  \\
                        ????   \\
                        \end{array}
                        \bigg)"/>
                
                    のようにケットの中には好きなものを入れてベクトルを置くことができます。量子力学では、ラベル付けには主に
                    <InlineMath math="\psi" /> 
                    (プサイ)や
                    <InlineMath math="\phi" />
                    (ファイ)を用います。
                    なお、複数の量子の状態を表す時、
                    <InlineMath math="\vert  \rangle" />
                    の中に複数の状態を入れることもできます。
                    例えば、
                    <InlineMath math="\vert  0\rangle" />
                    の量子ビットが二つあった時、
                    <InlineMath math="\vert  00\rangle" />
                    のように表現することができます。
                </p>
                <p>
                    この量子ビットをより視覚的に捉えるツールとして、ブロッホ球という概念があります。
                    球の表面は中心からの距離がどこでも等しいので、2次元複素ベクトル空間内のあらゆる単位ベクトルを表現可能です。
                    ブロッホ球はベクトルの
                    <InlineMath math="z" />
                    軸で
                    <InlineMath math="\vert  0\rangle" />
                    と
                    <InlineMath math="\vert  1\rangle" />
                    を観測できる確率を表し、
                    <InlineMath math="xy" />
                    平面の角
                    <InlineMath math="\varphi" />
                    で“位相”を表します。
                    北極が
                    <InlineMath math="\vert  0\rangle" />
                    、南極が
                    <InlineMath math="\vert  1\rangle" />
                    に相当します。
                    例えば、
                   <BlockMath math="\vert  \psi\rangle=\cos \theta /2 \vert  0\rangle+\exp(i\varphi)\sin\vert  1\rangle" />
                    は以下のようになります。
                </p>
                <div className={classes.imgStyle}>
                    <img src={bloch} className={classes.img} />
                </div> 
                <p>
                    量子ビットは、先述の通り物理的には光子や電子のエネルギー、原子のスピンなどの量子系で実現されます。
                </p>
            </div>
            <div className={classes.stitle}>
                重ね合わせ
            </div>
            <div className={classes.paragraph}>
                <p>
                    古典ビットにはない性質として、量子ビットは0と1が“重ね合わさった”状態を生成することが可能となっています。
                    この状態は、ブロッホ球上では、
                    <InlineMath math="\vert 0\rangle" />
                    と
                    <InlineMath math="\vert 1\rangle" />
                    以外の点として捉えることができます。量子ビットの状態を数式で表してみると、以下のようになります。
                   <BlockMath math="\vert \psi\rangle =a\vert  0\rangle+b\vert  1\rangle = \bigg(
                    \begin{array}{r}
                    a  \\
                    b   \\
                    \end{array}
                    \bigg)" />
                    
                    ここで
                    <InlineMath math="a" />,
                    <InlineMath math="b" />
                    は
                    <BlockMath math="\vert  a\vert  ^2+\vert  b\vert  ^2=1" />
                    を満たす複素数です(ただし
                    <InlineMath math="a" />、
                    <InlineMath math="b" />
                    の片方が0である場合は重ね合わせとは呼称しません)。
                    この式が意味するのは、確率
                    <InlineMath math="\vert  a\vert  ^2" />
                    で状態
                    <InlineMath math="\vert  0\rangle" />、
                    確率
                    <InlineMath math="\vert  b\vert  ^2" />
                    で状態
                    <InlineMath math="\vert  1\rangle" />
                    が観測できるという状態です。
                    例えば、
                   <BlockMath math="\vert  \psi\rangle = \frac{\vert 0\rangle+\vert  1\rangle}{\sqrt{2}}= \frac{1}{\sqrt{2}} 
                    {\bigg(
                    \begin{array}{r}
                    1  \\
                    1   \\
                    \end{array}
                    \bigg)}" />
                    では、それぞれ
                    <lockMath math="\bigg(\frac{1}{\sqrt{2}} \bigg)^2=\frac{1}{2}" />
                    の確率で状態
                    <InlineMath math="\vert 0 \rangle" />
                    、
                    <InlineMath math="\vert 1 \rangle" />
                    を観測できます。
                </p>
                <p>
                    このような現象を活用することで、確率的な情報を取り扱うことができます。
                    より深く知りたい方は、シュレーディンガーの猫や偏光などに関して調べてみてください。
                </p>
            </div>
            <div className={classes.stitle}>
                量子もつれ
            </div>
            <div className={classes.paragraph}>
                <p>
                    もう一つ古典ビットと明確に違う性質として、量子もつれがあります。
                    これは、複数の量子ビットにおいて発生することのある特殊な相関です。
                    まずは簡単のため、二つの量子における量子もつれを考えましょう。
                    1つ目の量子をA、2つ目の量子をBとします。
                    ここで2量子のもつれかつ重ね合わせの4つの状態(Bell pair)を例に出してみましょう。
                    <BlockMath math="\vert \Phi^+\rangle \equiv \frac{1}{\sqrt{2}} \bigg(\vert 0\rangle_A \otimes \vert 0\rangle_B + \vert 1\rangle_A \otimes \vert 1\rangle_B\bigg)" /> 
                    <BlockMath math="\vert \Phi^-\rangle \equiv \frac{1}{\sqrt{2}} \bigg(\vert 0\rangle_A \otimes \vert 0\rangle_B - \vert 1\rangle_A \otimes \vert 1\rangle_B\bigg)" /> 
                    <BlockMath math="\vert \Psi^+\rangle \equiv \frac{1}{\sqrt{2}} \bigg(\vert 0\rangle_A \otimes \vert 1\rangle_B + \vert 1\rangle_A \otimes \vert 0\rangle_B\bigg)" /> 
                    <BlockMath math="\vert \Psi^-\rangle \equiv \frac{1}{\sqrt{2}} \bigg(\vert 0\rangle_A \otimes \vert 1\rangle_B - \vert 1\rangle_A \otimes \vert 0\rangle_B\bigg)" /> 
                    例えば
                    <InlineMath math="\vert \Phi^+\rangle" />
                    では,確率
                    <InlineMath math="\bigg( \frac{1}{\sqrt{2}} \bigg) ^2=\frac{1}{2}" />
                    で A、B共に
                    <InlineMath math="\vert 0\rangle" />
                    、確率
                    <InlineMath math="\bigg( \frac{1}{\sqrt{2}} \bigg) ^2=\frac{1}{2}" />
                    でA、B共に
                    <InlineMath math="\vert 1\rangle" />
                    という意味です。
                    <InlineMath math="\vert \Phi^+\rangle" />
                    では、バラバラに観測しても片方のみが0、もう片方が1、という結果は得られません。
                    片方の量子ビットを観測した時点で両方の状態が確定するということを意味します。
                </p>
                <p>
                    このように、多量子系において、複数の量子の状態が不可分になっている状態を量子もつれと呼称します。
                    物理的にどのようなことであるのかなどより深く知りたい方は、“EPRパラドックス”、“CHSH不等式”などに関して調べてみてください。

                </p>
            </div>
            <div className={classes.paragraph}>
                次のページ：<a href="https://qwqmlf.github.io/QuantumFrontier/article/qi_for_beginners2">量子コンピュータ基礎２</a>では、量子回路を中心に量子計算について解説していきます。
            </div>
        </div>
    )
}

export default Qi_for_beginners1;
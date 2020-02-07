import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './articles.css';
import { Helmet } from 'react-helmet';

const colors = {
    background: '#262626',
    h1: '#fff',
    text: '#fff',
    icon: '#BFBFBF',
    imgBack: '#fff',
}

const useStyles = makeStyles(theme => ({
    titleStyle: {
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
    stitleStyle: { 
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
        textAlign: 'center',
        margin: '0px auto',
        [theme.breakpoints.down('lg')]: {
            margin: '0px auto',
        },
        [theme.breakpoints.down('md')]: {
            margin: '0px auto',
        },
        [theme.breakpoints.down('sm')]: {
            margin: '0px auto'
        },
        [theme.breakpoints.down('xs')]: {
            margin: '0px 0px',
        },
        padding: 'auto',
    },
    list: {
        padding: '10px',
        fontFamily: 'YuGothic',
        fontWeight: 'bold',
    },
}));

function Qi_for_beginners1() {
    const classes = useStyles();

    return (
        <div>
            <Helmet>
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-AMS_CHTML"></script>
            </Helmet>

            <div className={classes.titleStyle}>
                量子コンピュータ基礎１
            </div>
            <div className={classes.itemStyle}>
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
                
                <div className={classes.imgStyle}>
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
            <div className={classes.stitleStyle}>
                量子力学的性質
            </div>
            <p>量子力学を用いると何が今までのコンピュータ(量子情報科学者は敬意を込めて古典コンピュータと呼称する)や通信と違うのでしょうか。そもそも量子力学とは、電子や光子(フォトン)などミクロな領域から始まった物理学です(マクロな物体における量子力学の話は長くなるので今回は割愛します).量子力学においては我々マクロな物体とは感覚的に異なる現象が多々起こります.</p>
                <p>例えば、量子力学では、観測という概念が非常に重要になります。古典力学では、初期値(例えば物体の位置や速度、加速度)がわかればその後の運動は基本的に予測できます(外部からの影響がない限り)。しかしながら量子力学では、観測するまでその後の推移は確定できません.</p>
                <p>量子力学の最も重要な現象(概念)として、重ね合わせと量子もつれという現象があります。量子計算機では、これらの現象を用いて量子ビットと呼ばれる情報単位を生成し、計算を行っています.</p>
                <h3 id="量子ビット">量子ビット</h3>
                <p>古典コンピュータでは、情報の最小単位としてビット(bit)を用います。ビットは、0もしくは1の2通りの情報を表現することができます。これを<span class="math inline">\(n\)</span>個用意することによって、<span class="math inline">\(2^n\)</span>の状態を表現することができます。量子情報科学分野では、古典ビットと呼称します。古典ビットは、物理的には主に電圧の高低差などを用います。また、古典ビットはコピーすることができます.</p>
                {/* <p>それに対し、量子計算機は量子ビット(qubit)と呼ばれる情報の単位を用います。この量子ビットは、古典計算機のビットのように、二つの情報を表現することができます。この時、量子ビットでは、二つの直行するベクトル(2次元複素ベクトル空間での正規直交基底)を用いて情報を表現します<span class="citation" data-cites="ibm"></span>。
                また、量子分野ではよく、ベクトルをブラケット記法という記法で表現します。
                ブラケット記法では、任意のベクトルは<span class="math inline">\(|\rangle\)</span> (ケットと読みます)のような記号に入れて表現します。
                例えば、古典ビットにおける0と1に相当する単純な状態は、
                
                <span class="math display">\[|0\rangle \equiv \bigg(
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
                \bigg)\]</span> 
                のように表現されます。ケットの中に入る数字もしくはアルファベットは、特に意味はなく、ラベルづけ(ベクトルに名前をつける)として機能します。
                つまり、
                <span class="math display">\vert ? \rangle \equiv \bigg(
                    \begin{array}{r}
                    12345  \\
                    54321   \\
                    \end{array}
                \bigg)\]</span> 
                
                のようにケットの中には好きなものを入れてベクトルを置くことができます。量子力学では、ラベル付けには主に<span class="math inline">\(\psi\)</span> (プサイ)や<span class="math inline">\(\phi\)</span> (ファイ)を用います。なお、複数の量子の状態を表す時、<span class="math inline">\(|\rangle\)</span>の中に複数の状態を入れることもできます。例えば、<span class="math inline">\(|0\rangle\)</span>の量子ビットが二つあった時、<span class="math inline">\(|00\rangle\)</span>のように表現することができます.</p>
                <p>この量子ビットをより視覚的に捉えるツールとして、ブロッホ球という概念があります。球の表面は中心からの距離がどこでも等しいので、2次元複素ベクトル空間内のあらゆる単位ベクトルを表現可能です。ブロッホ球はベクトルの<span class="math inline">\(z\)</span>軸で<span class="math inline">\(|0\rangle\)</span>と<span class="math inline">\(|1\rangle\)</span>を観測できる確率を表し、<span class="math inline">\(xy\)</span>平面の角<span class="math inline">\(\varphi\)</span>で“位相”<a href="#fn9" class="footnote-ref" id="fnref9"><sup>9</sup></a>を表します。北極が<span class="math inline">\(|0\rangle\)</span>、南極が<span class="math inline">\(|1\rangle\)</span>に相当します。例えば、<span class="math display">\[|\psi\rangle=\cos\frac{\theta}{2}|0\rangle+\exp(i\varphi)\sin\frac{\theta}{2}|1\rangle\]</span> は以下のようになります.</p>
                <p>量子ビットは、先述の通り物理的には光子や電子のエネルギー、原子のスピンなどの量子系で実現されます.</p>
                <h5 id="重ね合わせ">重ね合わせ</h5> */}
                {/* <p>古典ビットにはない性質として、量子ビットは0と1が“重ね合わさった”状態を生成することが可能となっています。この状態は、ブロッホ球上では、
                    <span class="math inline">\(|0\rangle\)</span>と<span class="math inline">\(|1\rangle\)</span>
                    以外の点として捉えることができます。量子ビットの状態を数式で表してみると、以下のようになります。
                    <span class="math display">\[|\psi\rangle =a|0\rangle+b|1\rangle = \bigg(
                    \begin{array}{r}
                    a  \\
                    b   \\
                    \end{array}
                    \bigg)\]</span> 
                    
                    ここで
                    <span class="math inline">\(a\)</span>,
                    <span class="math inline">\(b\)</span>
                    は
                    <span class="math inline">\(|a|^2+|b|^2=1\)</span>
                    を満たす複素数です(ただし
                    <span class="math inline">\(a\)</span>、
                    <span class="math inline">\(b\)</span>
                    の片方が0である場合は重ね合わせとは呼称しません)。
                    この式が意味するのは、確率
                    <span class="math inline">\(|a|^2\)</span>
                    で状態
                    <span class="math inline">\(|0\rangle\)</span>、
                    確率
                    <span class="math inline">\(|b|^2\)</span>
                    で状態
                    <span class="math inline">\(|1\rangle\)</span>
                    が観測できるという状態です。
                    例えば、
                    <span class="math display">\[|\psi\rangle =\frac{|0\rangle+|1\rangle}{\sqrt{2}}
                = \frac{1}{\sqrt{2}}{\bigg(
                    \begin{array}{r}
                    1  \\
                    1   \\
                    \end{array}
                    \bigg)}\]</span> では,それぞれ <span class="math inline">\(\bigg( \frac{1}{\sqrt{2}} \bigg) ^2=\frac{1}{2}\)</span>の確率で状態<span class="math inline">\(|0\rangle\)</span>、<span class="math inline">\(|1\rangle\)</span>を観測できます.</p>
                <p>このような現象を活用することで、確率的な情報を取り扱うことができます<a href="#fn10" class="footnote-ref" id="fnref10"><sup>10</sup></a>。より深く知りたい方は、シュレーディンガーの猫や偏光などに関して調べてみてください.</p> */}
            {/* </div> */}

        </div>
    )
}

export default Qi_for_beginners1;
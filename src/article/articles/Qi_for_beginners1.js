import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';

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
        background: colors.imgBack,
        margin: '0px 260px',
        [theme.breakpoints.down('lg')]: {
            margin: '0px 200px',
        },
        [theme.breakpoints.down('md')]: {
            margin: '0px 160px',
        },
        [theme.breakpoints.down('sm')]: {
            margin: '0px 80px'
        },
        [theme.breakpoints.down('xs')]: {
            margin: '0px 0px',
        },
        padding: '20px',
        textAlign: 'center',
        borderRadius: '5px 5px 5px 5px/5px 5px 5px 5px',
        border: 'solid 1px #696969',
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
            </div>
            <div className={classes.stitleStyle}>
                量子力学的性質
            </div>
            <div className={classes.itemStyle}>
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
            <div className={classes.stitleStyle}>
                量子ビット
            </div>
            <div className={classes.itemStyle}>
            <p>
                古典コンピュータでは、情報の最小単位としてビット(bit)を用います。 
                ビットは、0もしくは1の2通りの情報を表現することができます。 
                これをn個用意することによって、<span class="math inline">\(2^n\)</span>の状態を表現することができます。 
                量子情報科学分野では、古典ビットと呼称します。古典ビットは、物理的には主に電圧の高低差などを用います。 
                また、古典ビットはコピーすることができます。
            </p>
            <p>
                それに対し、量子計算機は量子ビット(Qubit)と呼ばれる情報の単位を用います。この量子ビットは、古典計算機のビットのように、二つの情報を表現することができます。
                この時、量子ビットでは、二つの直行するベクトル(二次元複素ベクトル空間での正規直交基底)を用いて情報を表現します。
                また、量子分野ではよく、ベクトルをブラッケット記法という記法で表現します。 
                ブラケット記法では、任意のベクトルは、<span class="math inline">\(\vert \rangle\)</span> (ケットと読みます)のような記号に入れて表現します。 
                例えば、古典ビットにおける0と1に相当する単純な状態は、 <span class="math display">\[\vert \rangle  ≡ \left(
                </span> のように表現されます。 ケットの中に入る数字もしくはアルファベットは、特に意味はなく、ラベルづけ(ベクトルに名前をつける)として機能します。
            </p>
            <p>
                量子力学では、ラベル付けには主に$ψ$(プサイ)や$φ$(ファイ)を用います。
                なお複数の量子の状態を表す時、$\vert }$の中に複数の状態を入れることもできます。
                例えば、$\vert \rangle $の量子ビットが二つあった時、$\vert 0\rangle $のように表現することができます。
            </p>
            </div>

        </div>
    )
}

export default Qi_for_beginners1;
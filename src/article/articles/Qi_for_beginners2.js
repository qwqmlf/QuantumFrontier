import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './articles.css';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// import images
import allgates from "../../img/allgates.png";
import U from "../../img/U.png";
import Id from "../../img/Id.png";
import pauliX from "../../img/pauliX.png";
import pauliY from "../../img/pauliY.png";
import pauliZ from "../../img/pauliZ.png";
import hadamard from "../../img/hadamard.png";
import CNOT from "../../img/CNOT.png";
import bell from "../../img/bell.png";
import kansoku from "../../img/kansoku.png";

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
        margin: '10px 40px',
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
    }, 
    imgStyle: {
        background: colors.imgBack,
        textAlign: 'center',
        margin: '10px auto',
        padding: '10px auto',
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
        [theme.breakpoints.down('400px')]: {
            width: "200px",
        },
    },
    paragraph: {
        fontSize: '14pt',
        marginBottom: '40px',
        margin: '60px',
        [theme.breakpoints.down('xs')]: {
            margin: '10px',
        },
    },
}));

function Qi_for_beginners2() {
    const classes = useStyles();
    
    return (
        <div>
            <div className={classes.title}>
                量子コンピュータ基礎２
            </div>
            <div className={classes.paragraph}>
                <p>        
                    このページでは、量子回路を中心に量子計算の基礎的な部分についてについて説明します。        
                </p>
            </div>

            <div className={classes.paragraph}>
                <div className={classes.stitle}>
                    量子回路
                </div>
                <p>
                    量子回路方式の量子計算機では、量子回路と呼ばれるものを用いて量子ビットの操作を記述します。
                    これは、既存の計算機における電子回路の論理回路の拡張になっています。
                    量子回路は量子ゲート(素子)から構成されており、量子ゲートを量子ビットに対して掛けることを「適用する」と呼称します。
                    量子ゲートは図のように、線の上にボックスを乗せて表記します。
                    この時線一本が1量子ビットを表しています。
                </p>
                <div className={classes.imgStyle}>
                    <img src={allgates} className={classes.img} />
                </div> 
                <p>
                    この節では、IBMの量子計算機に実装されている量子ゲートを説明します。
                    量子状態はユニタリーな時間発展であるため、量子ゲートはユニタリー行列として与えられます。
                    つまり、量子ビットの状態に対して、ユニタリー行列をかけていく作業と捉えることができます。
                    このようにして、量子ゲートは量子ビットの状態を変換する操作と捉えられます。
                </p>
                <div className={classes.imgStyle}>
                    <img src={U} className={classes.img} />
                </div>
                <p>
                    なお、任意のユニタリー行列
                    <InlineMath math="U" />
                    は
                    <BlockMath math="U^*U=UU^*=I" /> 
                    となっています。
                    ここで、
                    <InlineMath math="U^*" />
                    は、行列
                    <InlineMath math="U" />
                    の転置かつ複素共役(実部はそのまま虚部の符号を反転すること)な行列、
                    <InlineMath math="I" />
                    は単位行列となっています。
                    転置とは、
                    <InlineMath math="m" />
                    行
                    <InlineMath math="n" />
                    列の任意の行列
                    <InlineMath math="A" />
                    の
                    <InlineMath math="i,j" />
                    成分と
                    <InlineMath math="j,i" />
                    成分を入れ替えた
                    <InlineMath math="n" />
                    行
                    <InlineMath math="m" />
                    列の行列
                    <InlineMath math="A^{\mathrm{T}}" />
                    を表します。
                    また、単位行列とは、対角成分に1が並び、それ以外に0が並んだ行列のことです。
                    つまり、行列要素
                    <InlineMath math="a_{ij}" />
                    に関して、
                    <BlockMath math="a_{ij}= \begin{cases}
                    1 &amp; i=j \\
                    0 &amp; i\neq j
                    \end{cases}" /> 
                    が成り立つ行列を表します。
                    この操作は、ブロッホ球を回転させる操作とみなすことができます。
                    それでは早速量子ゲートをいくつかご紹介します。
                </p>
            </div>
            
            <div className={classes.paragraph}>
                <div className={classes.stitle}>
                    恒等演算子
                </div>
                <p>
                    恒等演算子は以下のような行列で、どのような量子ビットに対して適用しても量子ビットの状態は変化しません。
                    つまり、入力と出力が等しいゲートということになります。
                    よくIやIdと表記します。
                    <BlockMath math="I \equiv 
                        \begin{pmatrix}
                        1 &amp; 0 \\
                        0 &amp; 1  \\
                        \end{pmatrix}
                    " />
                </p>
                <div className={classes.imgStyle}>
                    <img src={Id} className={classes.img} /><figcaption>恒等演算子</figcaption>
                </div> 
            </div>

            <div className={classes.paragraph}>
                <div className={classes.stitle}>
                    パウリXYZゲート
                </div>
                <ul>
                    <li>
                        <p>
                            パウリX
                            <br />
                            <BlockMath math="X \equiv 
                                \begin{pmatrix}
                                0 &amp; 1 \\
                                1 &amp; 0  \\
                                \end{pmatrix}
                            " /> 
                            パウリXゲートは、ビット反転演算子とも呼ばれます。
                            これは、パウリXゲートを量子ビットに適用すると、以下のように
                            <InlineMath math="\vert 0\rangle" />
                            が
                            <InlineMath math="\vert 1\rangle" />
                            に、
                            <InlineMath math="\vert 1\rangle" />
                            が
                            <InlineMath math="\vert 0\rangle" />
                            に変換できるためです。
                            これは古典におけるNOTゲートに相当します。
                            また、ブロッホ球上では、
                            <InlineMath math="x" />
                            軸の周りに角度
                            <InlineMath math="\pi" />
                            回転させる操作と捉えることができます。
                            <BlockMath math="X\vert 0\rangle= 
                                    \begin{pmatrix}
                                    0 &amp; 1 \\
                                    1 &amp; 0  \\
                                    \end{pmatrix}
                                
                                
                                    \begin{pmatrix}
                                    1  \\
                                    0   \\
                                    \end{pmatrix}
                                
                                    =
                                    \begin{pmatrix}
                                    0  \\
                                    1   \\
                                    \end{pmatrix}
                                    =\vert 1\rangle"
                            /> 
                            <BlockMath math="X\vert 1\rangle= 
                                \begin{pmatrix}
                                0 &amp; 1 \\
                                1 &amp; 0  \\
                                \end{pmatrix}
                                
                                
                                    \begin{pmatrix}
                                    0  \\
                                    1   \\
                                    \end{pmatrix}
                                 = 
                                    \begin{pmatrix}
                                    1  \\
                                    0   \\
                                    \end{pmatrix}
                                =\vert 0\rangle" 
                            /> 
                            量子回路上では以下のように表現します。
                        </p>
                        <div className={classes.imgStyle}>
                            <img src={pauliX} className={classes.img} /><figcaption>パウリXゲート</figcaption>
                        </div> 
                    </li>
                    <li>
                        <p>
                            パウリY 
                            <BlockMath math="Y \equiv 
                                    \begin{pmatrix}
                                    0 &amp; -i \\
                                    i &amp; 0  \\
                                    \end{pmatrix}
                                " 
                            /> 
                            パウリYゲートは、位相・ビット反転演算子とも呼びます。
                            ブロッホ球上では、
                            <InlineMath math="y" />
                            軸の周りに角度
                            <InlineMath math="\pi" />
                            回転させる操作と捉えることができます。
                            <BlockMath math="Y\vert 0\rangle=
                                    \begin{pmatrix}
                                    0 &amp; -i \\
                                    i &amp; 0  \\
                                    \end{pmatrix}
                                
                                
                                \begin{pmatrix}
                                    1  \\
                                    0   \\
                                    \end{pmatrix}
                                    
                                    =
                                \begin{pmatrix}
                                    0  \\
                                    i   \\
                                    \end{pmatrix}
                                    
                                    =i\vert 1\rangle"
                            /> 
                            <BlockMath math="Y\vert 1\rangle=
                                    \begin{pmatrix}
                                    0 &amp; -i \\
                                    i &amp; 0  \\
                                    \end{pmatrix}
                                
                                
                                \begin{pmatrix}
                                    0  \\
                                    1   \\
                                    \end{pmatrix}
                                    
                                    =
                                \begin{pmatrix}
                                    -i  \\
                                    0  \\
                                    \end{pmatrix}
                                    
                                    =-i\vert 0\rangle"
                            /> 
                            量子回路上では以下のように表現します。
                        </p>
                        <div className={classes.imgStyle}>
                            <img src={pauliY} className={classes.img}/>
                        </div> 
                    </li>
                    <li>
                        <p>
                            パウリZ 
                            <BlockMath math="Z \equiv 
                                \begin{pmatrix}
                                1 &amp; 0 \\
                                0 &amp; -1  \\
                                \end{pmatrix}
                                " 
                            /> 
                            パウリZゲートは、位相反転演算子とも呼びます.ブロッホ球上では、
                            <InlineMath math="z" />
                            軸周りに角度
                            <InlineMath math="\pi" />
                            回転することを意味します。
                            <InlineMath math="\vert 0\rangle" />
                            に対しては何も変化させず、
                            <InlineMath math="\vert 1\rangle" />
                            に対しては位相のみ反転を行います。
                            <BlockMath math="Z\vert 0\rangle=
                                \begin{pmatrix}
                                1 &amp; 0 \\
                                0 &amp; -1  \\
                                \end{pmatrix}
                                
                                
                                \begin{pmatrix}
                                1 \\
                                0 \\
                                \end{pmatrix}
                                
                                =
                                \begin{pmatrix}
                                1 \\
                                0 \\
                                \end{pmatrix}
                                
                                =\vert 0\rangle"
                            /> 
                            <BlockMath math="\begin{aligned}
                                Z\vert 1\rangle&amp;=
                                \begin{pmatrix}
                                1 &amp; 0 \\
                                0 &amp; -1  \\
                                \end{pmatrix}
                                
                                
                                \begin{pmatrix}
                                0 \\
                                1 \\
                                \end{pmatrix}
                                
                                =
                                \begin{pmatrix}
                                0 \\
                                -1 \\
                                \end{pmatrix}
                                \\[5pt]
                                &amp;=-
                                \begin{pmatrix}
                                0 \\
                                1 \\
                                \end{pmatrix}
                                
                                =-\vert 1\rangle
                                \end{aligned}" 
                            /> 
                            量子回路上では以下のように表現します。
                        </p>
                        <div className={classes.imgStyle}>
                        <img src={pauliZ} className={classes.img} />
                        </div>
                    </li>
                </ul>
            </div>

            <div className={classes.paragraph}>
                <div className={classes.stitle}>
                    アダマールゲート
                </div>
                <p>
                    <BlockMath math="H \equiv \frac{1}{\sqrt{2}}
                        \begin{pmatrix}
                        1 &amp; 1 \\
                        1 &amp; -1  \\
                        \end{pmatrix}
                    " /> 
                    アダマールゲート は、量子ビットを重ね合わせ状態にすることができるゲートです。
                    アダマール変換とも呼称します。
                    <BlockMath math="H\vert 0\rangle=\frac{1}{\sqrt{2}}
                        \begin{pmatrix}
                            1 &amp; 1 \\
                            1 &amp; -1  \\
                            \end{pmatrix}
                        
                        
                            \begin{pmatrix}
                            1 \\
                            0 \\
                            \end{pmatrix}
                        
                        =\frac{1}{\sqrt{2}}
                        
                            \begin{pmatrix}
                            1 \\
                            1 \\
                            \end{pmatrix}
                        " /> 
                    <BlockMath math="H\vert 1\rangle=\frac{1}{\sqrt{2}}
                            \begin{pmatrix}
                            1 &amp; 1 \\
                            1 &amp; -1  \\
                            \end{pmatrix}
                        
                        
                            \begin{pmatrix}
                            0 \\
                            1 \\
                            \end{pmatrix}
                        
                        =\frac{1}{\sqrt{2}}
                        
                            \begin{pmatrix}
                            1 \\
                            1 \\
                            \end{pmatrix}
                        " 
                    /> 
                    ここで 
                    <BlockMath math="\frac{1}{\sqrt{2}}
                        
                            \begin{pmatrix}
                            1 \\
                            1 \\
                            \end{pmatrix}
                        =\frac{\vert 0\rangle+\vert 1\rangle}{\sqrt{2}}"
                    /> 
                    であり、これは量子ビットを観測するとそれぞれ
                    <InlineMath math=" \frac{1}{\sqrt{2}}  ^2=\frac{1}{2}" />
                    の確率で状態<InlineMath math="\vert 0\rangle" />
                    、
                    <InlineMath math="\vert 1\rangle" />
                    という結果を得ることができる重ね合わせの状態です。
                    量子回路上では以下のように表現します。
                </p>
                <div className={classes.imgStyle}>
                    <img src={hadamard} className={classes.img} />
                </div> 
            </div>
            
            <div className={classes.paragraph}>
                <div className={classes.stitle}>
                    位相シフトゲート
                </div>
                <p>
                    <BlockMath math="S \equiv
                        \begin{pmatrix}
                        1 &amp; 0 \\
                        0 &amp; i  \\
                        \end{pmatrix}"　
                    />
                    <BlockMath math="S^{\dagger} \equiv
                        \begin{pmatrix}
                        1 &amp; 0 \\
                        0 &amp; -i  \\
                        \end{pmatrix}" 
                    /> 
                    
                    <BlockMath math="T \equiv
                            \begin{pmatrix}
                            1 &amp; 0 \\
                            0 &amp; \exp(i\frac{\pi}{4})
                            \end{pmatrix}"
                    /> 
                    <BlockMath math="T^{\dagger} \equiv
                            \begin{pmatrix}
                            1 &amp; 0 \\
                            0 &amp; \exp(-i\frac{\pi}{4})
                            \end{pmatrix}"
                    />
                    位相シフト演算は、任意の重ね合わせ状態に対して適用すると、
                    <InlineMath math="\vert 0\rangle" />
                    には何も操作を行わず、
                    <InlineMath math="\vert 1\rangle" />
                    にのみ位相の操作を行います。
                    将来的には位相の角度を指定して様々な位相シフトゲートを作ることができることが望まれていますが、今回操作する予定のIBM Qでは二つの角に対応した
                    <InlineMath math="S,T" /> 
                    (それぞれ
                    <InlineMath math="\frac{\pi}{2}" />
                    と
                    <InlineMath math="\frac{\pi}{4}" />)
                    とその反転の
                    <InlineMath math="S^{\dagger}、T^{\dagger}" />
                    が実装されています。
                    <BlockMath math="S\vert x\rangle= 
                            \begin{pmatrix}
                            1 &amp; 0 \\
                            0 &amp; i  \\
                            \end{pmatrix}
                         
                            \begin{pmatrix}
                            a\\
                            b\\
                            \end{pmatrix}
                        
                        =a\vert 0\rangle+ib\vert 1\rangle"
                    /> 
                    <BlockMath math="T\vert x\rangle= 
                            \begin{pmatrix}
                            1 &amp; 0 \\
                            0 &amp; \exp(i\frac{\pi}{4})  \\
                            \end{pmatrix}
                         
                            \begin{pmatrix}
                            a\\
                            b\\
                            \end{pmatrix}
                        
                        =a\vert 0\rangle+\exp(i\frac{\pi}{4}b\vert 1\rangle"
                    /> 
                    位相シフト演算
                    <InlineMath math="S^{\dagger}" />
                    と
                    <InlineMath math="T^{\dagger}" />
                    は、元の
                    <InlineMath math="S" />
                    、
                    <InlineMath math="T" />
                    シフト演算の逆向きの回転になっています。
                    よって、
                    <BlockMath math="SS^{\dagger}=I" />
                    、
                    <BlockMath math="TT^{\dagger}=I" />
                    となっています。
                </p>
            </div>
            <div className={classes.paragraph}>
                <div className={classes.stitle}>
                    CNOTゲート
                </div>
                <p>
                    <BlockMath math="\mathrm{CNOT}^{(c,t)}\equiv  
                        \begin{pmatrix}
                        1 &amp; 0 &amp; 0 &amp; 0 \\
                        0 &amp; 1 &amp; 0 &amp; 0 \\
                        0 &amp; 0 &amp; 0 &amp; 1 \\
                        0 &amp; 0 &amp; 1 &amp; 0 \\
                        \end{pmatrix}" 
                    />
                     CNOT (controlled NOT)ゲートは、2つの量子をもつれさせるゲートです。
                    今までのゲートが単一量子ビットの演算子(素子)だったのに対し、CNOTゲートは2量子ビットを必要とします。
                    片方の量子ビットに反転演算子Xを実行することができるゲートですが、この時もう片方の量子ビットによって制御されていることが特徴です。
                    NOT演算子(Xゲート)を制御することから、制御NOTゲートとも呼ばれます。
                </p>
                <p>
                    CNOTゲートの実行には、制御(control)量子ビット
                    <InlineMath math="\vert c\rangle" />
                    と標的(target)量子ビット
                    <InlineMath math="\vert t\rangle" />
                    の二つが必要です。
                    そして、制御量子ビットが
                    <InlineMath math="\vert 0\rangle" />
                    ならば何もせず、
                    <InlineMath math="\vert 1\rangle" />
                    ならばXゲート(ビット反転)を実行します。
                    <BlockMath math="\mathrm{CNOT}\vert 00\rangle=\vert 00\rangle \quad \mathrm{CNOT}\vert 01\rangle=\vert 01\rangle" /> 
                    <BlockMath math="\mathrm{CNOT}\vert 10\rangle=\vert 11\rangle \quad \mathrm{CNOT}\vert 11\rangle=\vert 10\rangle" />
                </p>
                <p>
                    量子回路上では以下のように表現します。
                    十字になっているのが標的量子ビットで、小さな塗りつぶされた丸が制御量子ビットです。
                </p>
                <div className={classes.imgStyle}>
                    <img src={CNOT} className={classes.img}/>
                </div> 
                <p>
                    ここで、先ほどの量子もつれの説明ででてきたBell pairの一つ、
                    <InlineMath math="\vert \Phi^+\rangle" />
                    を生成してみましょう。
                    Bell pairは,アダマールゲートとCNOTゲートを使えばすぐに生成できます。
                </p>
                <div className={classes.imgStyle}>
                    <img src={bell} className={classes.img}/>
                </div> 
                <p>
                    この時,二つの量子ビットはどのような行列の式で表現できるのでしょうか。
                    答えは、一つの量子ビットは当然アダマールを適用するとして、もう一つの何もしない量子ビットに対しては、「何もしない」量子ゲートを適用したことにするというものです。
                    「何もしない」量子ゲートは、最初に説明したゲート、恒等演算子(Id)のことでした。
                    それを元に最初の段階の操作を式にすると以下のようになります。
                    <BlockMath math="\begin{pmatrix}
                        &amp;H\vert 0\rangle=\frac{1}{\sqrt{2}}
                        
                            \begin{pmatrix}
                            1 \\
                            1 \\
                            \end{pmatrix}
                        &amp;I\vert 0\rangle=\vert 0\rangle
                        \end{pmatrix}" 
                    />
                </p>
                <p>
                    ここで、二つの量子に別の量子ゲートを適用した場合、操作をテンソル積を用いることでひとつの式にまとめることができます。
                    (このためにわざわざ「何もしない」操作の式を立てたのです。)
                    このまとめたテンソル積を、クロネッカー積と呼称します。
                    <BlockMath math="\begin{aligned}
                        H\otimes I
                        &amp;=\frac{1}{\sqrt{2}}
                            \begin{pmatrix}
                            1 &amp; 1 \\
                            1 &amp; -1  \\
                            \end{pmatrix}
                        \otimes
                            \begin{pmatrix}
                            1 &amp; 0 \\
                            0 &amp; 1  \\
                            \end{pmatrix}
                        \\[5pt]
                        &amp;=\frac{1}{\sqrt{2}}
                            \begin{pmatrix}
                            1
                            \begin{pmatrix}
                            1 &amp; 0 \\
                            0 &amp; 1  \\
                            \end{pmatrix}
                          &amp; 1
                            \begin{pmatrix}
                            1 &amp; 0 \\
                            0 &amp; 1  \\
                            \end{pmatrix}
                          \\
                            1
                            \begin{pmatrix}
                            1 &amp; 0 \\
                            0 &amp; 1  \\
                            \end{pmatrix}
                          &amp; -1
                            \begin{pmatrix}
                            1 &amp; 0 \\
                            0 &amp; 1  \\
                            \end{pmatrix}
                           \\
                            \end{pmatrix}
                        \\[5pt]
                        &amp;=\frac{1}{\sqrt{2}} \begin{pmatrix}
                        1 &amp; 0 &amp; 1 &amp; 0 \\
                        0 &amp; 1 &amp; 0 &amp; 1 \\
                        1 &amp; 0 &amp; -1&amp; 0 \\
                        0 &amp; 1 &amp; 0 &amp; -1 \\
                        \end{pmatrix}
                        \end{aligned}"
                    /> 
                    ここまでくれば、あとはCNOTを適用するだけです。
                </p>
            </div>


            <div className={classes.paragraph}>
                <div className={classes.stitle}>
                    観測
                </div>
                <p>
                    今まで説明してきたように、量子ビットは重ね合わせやもつれの状態にすることが可能ですが、量子ビットを観測すると状態が確定し、重ね合わせや量子もつれは壊れてしまい、古典ビットになります。
                    観測は以下のようなアイコンで表現します。
                </p>
                <div className={classes.imgStyle}>
                    <img src={kansoku} className={classes.img} />
                </div> 
                <p>
                    この図では、第4量子ビットを測定し、値(古典ビット)が得られるということを示しています。
                </p>
            </div>
        </div>
    )
}

export default Qi_for_beginners2;
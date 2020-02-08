import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';


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


function Qwnn_graph_classification(
) {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.title}>
                量子ウォークグラフ分類
            </div>
            <div className={classes.paragraph}>
                <p>                
                    近年様々な場面においてグラフのデータの需要というものが高まってきています。例えば化学構造を判定する判定器や、ネットワークにおけるコミュニティ分析等様々に渡ります。
                    量子技術の関連で言うと、量子コンピュータにおける量子ビットをどのように接続するのか、といったものもグラフのデータの一種になります。
                </p>
                <p>
                    しかしながらこのようなグラフのデータというのは一般に処理が非常に重たいという特徴があります。例えばグラフを行列の形式で表した場合、1000個のノードを持つグラフであれば
                    1000×1000の行列を扱うことになります。大きなグラフになれば、数万から数十万ものノードを持つグラフを扱わなければなりません。そのような場合古典のコンピュータでは非常に
                    大きなメモリが必要となってしまうことに加えて、処理に非常に時間がかかります。また、近年様々な機械学習の技術が発展してきている中で、グラフのデータにおける機械学習ではまだ
                    高い精度を実現しているとは言い難い状況です。特定のデータセットにおいては95%の精度を超えるものも出てきましたが、クラスやノードが増えたりすると50%を切ってしまうデータセットもあります。
                </p>
                <p>
                    そこで今回我々が取り組んだこととしては、量子コンピュータを使ってうまくグラフを扱うことができないかということについて、実際にプロトタイプのモデルを作成し、検証を行いました。
                    グラフに関するタスクは様々にありますが、今回はグラフの分類問題に絞ってモデルを作成しました。
                </p>
            </div>
            <div className={classes.title}>
                    要素技術について
                </div>
            <div className={classes.paragraph}>
                <div className={classes.stitle}>
                    量子ウォーク
                </div>
                <p>                
                    量子ウォークとは簡単に言ってしまえば、古典のランダムウォークと呼ばれるものの量子版です。しかしながらその性質の特異さから、量子ランダムウォークではなく量子ウォークと呼ばれるようになりました。
                    量子ウォークは大きく二つの種類に分かれており、離散時間量子ウォークと連続時間量子ウォークと呼ばれるものが存在します。
                    今回のプロジェクトではコイン量子ウォークと呼ばれる離散時間量子ウォークの一種を用います。
                </p>
                <p>
                    まずコイン量子ウォークの特徴として、古典のランダムウォークにおいて、各面の出現確率が1/2のコイントスをするように、コインのユニタリというものを定義します。
                    この時コインはユニタリな行列であればどのような行列でもコインとなり得ます。
                    そしてそのようなコインに応じて、量子ウォーカーが次のステップでどのように動くのかということが決定されます。
                    古典のランダムウォークと全く異なる点のひとつとして、量子ウォーカーが確率的な場所の重ね合わせを持ちながら、歩を進めていくという点です。
                    これにより、確率分布の拡散速度は古典のランダムウォークに比べて平方根的に加速するという特徴があります。
                    一般に一次元直線上のランダムウォークは無限回試行を繰り返せば、原点に確率分布が収束するような、正規分布へ近づいていきますが、一次元直線状の量子ウォークにおいては、確率が外側に広がっていき、原点に向かって小さくなっていくような分布を示します。
                    この分布の形状がどのようになるかについては、コインの決定方法によります。
                </p>
                <p>
                    このような特徴を持った量子ウォークというものを任意のグラフ上で定義します。
                    まず、グラフがどのように接続されているのかという隣接行列から、量子ウォーカーがどのように動くのかという情報を持ったステップオペレーターというものを定義します。
                    各ノードにおいて、隣接するノードへどのように移動するのかを記述するための行列になります。
                    次にどれくらいの確率で移動するのかという確率遷移の役割を果たすコインオペレーターというものを定義します。
                    今回は各ノードに対してローカルなコインオペレーターというものを定義します。
                    これにより、各ノード毎に隣接するノードのにどのくらいの確率で遷移するのかということを行列として保持しておくことができます。
                    こうして、ステップオペレーターとコインオペレーターという二つのオペレーターが完成し、これらの内積をとったものが、1ステップの量子ウォークを表す時間発展のオペレーターとなります。
                    これをt回かけることで、tステップ後の量子ウォークの時間発展のオペレーションを行うことができます。
                </p>
                <p>
                    このようにして、グラフ上の量子ウォークを定義することで、あるグラフからそのグラフに特有な確率振幅というものを取り出すことができます。
                    これをデータとして分類を行なっていきます。
                </p>
            </div>
            <div className={classes.title}>
                    分類回路
                </div>
            <div className={classes.paragraph}>
                <div className={classes.stitle}>
                    量子ウォークによるグラフ分類モデル
                </div>
                <p>
                    上のように量子ウォークを用いてグラフから生成した確率振幅を、実際に量子ビットを用いて分類していきます。
                </p>
                <p>
                    まず、量子ウォークの確率振幅を持った量子ビットをデータビットとし、そこに対して新たにマッピングビットとして量子ビットを追加します。
                    次に、データビットからマッピングビットに対して、コントロールオペレーションを用いて情報をマッピングしていきます。
                    この時、このコントロールオペレーションを特定の角度を持ったコントロールローテションオペレーションとして行うことで、この回転の角度を調整していきます。
                    この調整のプロセスについては後述します。
                    最後にマッピングビットを測定し、事前に取り決めたエンコーダーにそって、その測定結果がどのクラスに分類されるのかということを計算します。
                    そしてその結果からどれくらいのコストが存在するのかということを計算し、先ほどの回転角度のパラメーターに対してフィードバックを行います。
                </p>
            </div>

        </div>
    )
}

export default Qwnn_graph_classification;

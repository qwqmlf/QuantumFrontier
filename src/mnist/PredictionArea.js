import React, { Component } from 'react'

export class PredictionArea extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.isPredicted){
            return (
                <div>
                    <p>
                        {this.props.data.prob} %の確率で、あなたが書いた数字は、
                    </p>
                    <p>
                        {this.props.data.ans} と判定されました。
                    </p>
                </div>
            )
        }else{
            return(
                <div>
                    <p>PREDICTボタンを押すと、予測結果を表示します。</p>
                </div>
            )
        }
    }
}

export default PredictionArea;
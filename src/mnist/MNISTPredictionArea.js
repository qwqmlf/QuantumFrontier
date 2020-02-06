import React, { Component } from 'react'

import CanvasArea from './CanvasArea.js';
import ButtonArea from './ButtonArea.js';
import PredictionArea from './PredictionArea.js';

import { isBrowser, isMobile } from 'react-device-detect';


const colors = {
    background: '#262626',
    h1: '#fff',
    text: '#fff',
    icon: '#fff',
    canvasBack: '#fff',
};

const style = {
    canvas: {
        border: '1px solid gray',
        backgroundColor: colors.canvasBack,
    },
};


class DemoArea extends Component {

    constructor(props) {
        super(props);
        this.state={
            isPredicted: false, 
            data: []
        };
        const canvasProp = {
            width:'280px', 
            height: '280px',
            ref:"canvas",
        }
        this.canvasProp = canvasProp;
    }
    
    // canvas
    getContext() {
        return this.refs.canvas.getContext('2d');
    }

    // jsonから予測結果を引っ張ってくる
    componentDidMount(){
        return fetch(this.props.url)
            .then((response) => response.json())
            .then((predictedJson) => {
                this.setState({
                    isPredicted: true,
                    data: predictedJson,
                });
    
        })
        .catch((error) =>{
            console.error(error);
        });
    }
    
    
    
    render() {
        return (
            
            <div>
                <CanvasArea getContext={this.getContext} canvasProp = {this.canvasProp} />
                <ButtonArea 
                    getContext={this.getContext} 
                    componentDidMount={this.componentDidMount}
                    width={this.width}
                />
                <PredictionArea result={this.state.data} isPredicted={this.state.predicted} />

                
            </div>
        )
    }
}

export default DemoArea

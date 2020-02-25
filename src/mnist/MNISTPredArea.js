import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { BrowserView, MobileView } from 'react-device-detect';

import PredictionArea from './PredictionArea.js';
import{ Helmet } from 'react-helmet';


const colors = {
    background: '#262626',
    h1: '#fff',
    text: '#fff',
    icon: '#fff',
    canvasBack: '#fff',

    resetButton: '#ff5050',
    predictButton: '#1a75ff',
};

const style = {
    canvas: {
        border: '1px solid gray',
        backgroundColor: colors.canvasBack,
    },


    resetButton: {
        background: colors.resetButton,
        color: colors.text,
        margin: '10px',
        padding: '10px',
    },
    predictButton: {
        background: colors.predictButton,
        color: colors.text,
        margin: '20px',
        padding: '10px',
    },
    buttonArea: {
        margin:'auto', 
        display:'block'
    },
    icon: {
        color: colors.icon,
        margin: '0px 0px 0px 10px',
    },

};

export class MNISTPredArea extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            drawing: false, 
            isPredicted: false, 
        };
        
    }

    // canvas
    getContext() {
        return this.refs.canvas.getContext('2d');
    }

    
    touchStartDrawing(x, y) {
        this.setState({ drawing: true });
        const ctx = this.getContext();

        this.refs.canvas.addEventListener('touchmove', function(event) {
            for (var i = 0; i < event.touches.length; i++) {
                var touch = event.touches[i];
                ctx.lineWidth = 15;
                ctx.lineCap = "round";
                ctx.moveTo(x, y);
            }
          }, false);
    }

    touchDraw(x, y) {
        if (!this.state.drawing) {
            return;
        }
        const ctx = this.getContext();
        this.refs.canvas.addEventListener('touchmove', function(event) {
            for (var i = 0; i < event.touches.length; i++) {
                var touch = event.touches[i];
                ctx.lineTo(x, y);
                ctx.stroke();
            }
          }, false);
    }


    startDrawing(x, y) {
        this.setState({ drawing: true });
        const ctx = this.getContext();
        ctx.lineWidth = 15;
        ctx.lineCap = "round";
        ctx.moveTo(x, y);
    }

    draw(x, y) {
        if (!this.state.drawing) {
            return;
        }
        const ctx = this.getContext();
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    endDrawing() {
        this.setState({ drawing: false });
    }

    resetCanvas() {
        const ctx = this.getContext();
        ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
        ctx.beginPath();
        this.setState({ isPredicted: false });
    }


    // jsonから予測結果を引っ張ってくる
    resultGet(){
        this.setState({ isPredicted: true });

    }
 
    // resultGet() {

    //     languagePluginLoader.then(() => {
    //         pyodide.loadPackage(['matplotlib']).then(() => {
    //             pyodide.runPython(`
    //                   import numpy as np
    //                   pi = np.pi`
    //             );
      
    //             // document.getElementById("pyplotfigure").src=pyodide.globals.img_str
      
    //         });});
    // }

    render() {
        if(this.state.isPredicted){
            return (
                <div>
                    <Helmet >
                        <script type="text/javascript" src="brython\www\src\brython.js"></script>
                        <script type="text/python" src="./qmnist.py"></script>
                    </Helmet>

                    <div>
                        <BrowserView>
                            <canvas
                                id='canvas'
                                ref='canvas'
                                width="300px"
                                height="300px"
                                onMouseDown={e => this.startDrawing(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
                                onMouseUp={() => this.endDrawing()}
                                onMouseLeave = {() => this.endDrawing()}
                                onMouseMove={e => this.draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
                                style={style.canvas}
                                />
                        </BrowserView>

                        <MobileView>
                            <canvas
                                ref="canvas"
                                width={ window.innerWidth/2 }
                                height={ window.innerWidth/2 }
                                
                                onMouseDown = {e => e.preventDefault()}
                                onMouseDown={e => this.startDrawing(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
                                onMouseMove = {e => e.preventDefault()}
                                onMouseMove = {e => this.draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
                                onMouseUp = {() => this.endDrawing()}
                                onMouseLeave = {() => this.endDrawing()}

                                style={style.canvas}
                            />
                        </MobileView>
                    </div>

                    <div style={style.buttonArea}>
                        <BrowserView>
                            <Button
                                style={style.resetButton}
                                onClick={()=> this.resetCanvas()}
                            >
                                delete
                                <DeleteIcon fontSize="midium" style={style.icon}/> 
                            </Button>
                            <Button
                                id="prediction"
                                style={style.predictButton}
                                onClick={()=> this.resultGet()}
                            >
                                predict
                                <EqualizerIcon fontSize="midium" 
                                    style={style.icon}
                                />
                            </Button>
                        </BrowserView>

                        <MobileView>
                            
                            {/* モバイル対応する */}
                            <Button
                                id="prediction"
                                style={style.resetButton}
                                onClick={()=> this.resetCanvas()}
                            >
                                delete
                                <DeleteIcon fontSize="midium" style={style.icon}/> 
                            </Button>
                            <Button
                                style={style.predictButton}
                                onClick={()=> this.resultGet()}
                            >
                                predict
                                <EqualizerIcon fontSize="midium" style={style.icon} />
                            </Button>

                        </MobileView>
                    </div>
                    {/* <PredictionArea  isPredicted={this.state.isPredicted}/> */}
                    <div>
                        <p>
                            <span id="prob"></span> %の確率で、あなたが書いた数字は、
                        </p>
                        <p>
                            <span id="ans"></span> と判定されました。
                        </p>
                    </div>
                </div>
            )
        }else{
            return (
                <div>
                    <Helmet >
                        <script type="text/javascript" src="brython\www\src\brython.js"></script>
                        <script type="text/python" src="./qmnist.py"></script>
                    </Helmet>

                    <div>
                        <BrowserView>
                            <canvas
                                id='canvas'
                                ref='canvas'
                                width="300px"
                                height="300px"
                                onMouseDown={e => this.startDrawing(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
                                onMouseUp={() => this.endDrawing()}
                                onMouseLeave = {() => this.endDrawing()}
                                onMouseMove={e => this.draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
                                style={style.canvas}
                                />
                        </BrowserView>

                        <MobileView>
                            <canvas
                                ref="canvas"
                                width={ window.innerWidth/2 }
                                height={ window.innerWidth/2 }
                                
                                onMouseDown = {e => e.preventDefault()}
                                onMouseDown={e => this.startDrawing(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
                                onMouseMove = {e => e.preventDefault()}
                                onMouseMove = {e => this.draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
                                onMouseUp = {() => this.endDrawing()}
                                onMouseLeave = {() => this.endDrawing()}

                                style={style.canvas}
                            />
                        </MobileView>
                    </div>

                    <div style={style.buttonArea}>
                        <BrowserView>
                            <Button
                                style={style.resetButton}
                                onClick={()=> this.resetCanvas()}
                            >
                                delete
                                <DeleteIcon fontSize="midium" style={style.icon}/> 
                            </Button>
                            <Button
                                id="prediction"
                                style={style.predictButton}
                                onClick={()=> this.resultGet()}
                            >
                                predict
                                <EqualizerIcon fontSize="midium" 
                                    style={style.icon}
                                />
                            </Button>
                        </BrowserView>

                        <MobileView>
                            
                            {/* モバイル対応する */}
                            <Button
                                id="prediction"
                                style={style.resetButton}
                                onClick={()=> this.resetCanvas()}
                            >
                                delete
                                <DeleteIcon fontSize="midium" style={style.icon}/> 
                            </Button>
                            <Button
                                style={style.predictButton}
                                onClick={()=> this.resultGet()}
                            >
                                predict
                                <EqualizerIcon fontSize="midium" style={style.icon} />
                            </Button>

                        </MobileView>
                    </div>
                    {/* <PredictionArea  isPredicted={this.state.isPredicted}/> */}
                    <div>
                        <p>PREDICTボタンを押すと、予測結果を表示します。</p>
                    </div>
                </div>
            )
        }  
    }
}

export default MNISTPredArea;

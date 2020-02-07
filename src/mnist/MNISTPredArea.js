import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { BrowserView, MobileView } from 'react-device-detect';

import PredictionArea from './PredictionArea.js';

import { pyodide } from 'pyodide-loader';
 
// import axios from 'axios';

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
    }


    // // jsonから予測結果を引っ張ってくる
    // resultGet(){
    //     let numberImage = document.getElementById("canvas")
    //     let encodedImage = numberImage.toDataURL();

    //     console.log('jjjjjjjjjjjjjjjjjj')
    //     axios.post('203.178.135.229:3000', { params: {encodedImage}})
    //         // .then((res) => {
    //         //     const result = res.data;
    //         //     this.setState({
    //         //         drawing: false, 
    //         //         isPredicted: true, 
    //         //         data: result,
    //         //     }, 
    //         //     console.log(result)
    //         //     );
    //         // })
    //     axios.get('203.178.135.229:3000')
    //     .then((res) => {

    //         console.log(res)
    //         // const result = res.data;
    //         // this.setState({
    //         //     drawing: false, 
    //         //     isPredicted: true, 
    //         //     data: result,
    //         // }, 
    //         // console.log(result)
    //         // );
    //         })
    // }
    
    resultGet() {

        languagePluginLoader.then(() => {
            pyodide.loadPackage(['matplotlib']).then(() => {
                pyodide.runPython(`
                      import matplotlib.pyplot as plt
                      import io, base64
                      fig, ax = plt.subplots()
                      ax.plot([1,3,2])
                      buf = io.BytesIO()
                      fig.savefig(buf, format='png')
                      buf.seek(0)
                      img_str = 'data:image/png;base64,' + base64.b64encode(buf.read()).decode('UTF-8')`
                );
      
                document.getElementById("pyplotfigure").src=pyodide.globals.img_str
      
            });});
    }

    render() {
        return (
            <div>
                <Helmet >
                    <script src="https://pyodide.cdn.iodide.io/pyodide.js"></script>
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
                            onMouseLeave={() => this.endDrawing()}
                            onMouseMove={e => this.draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
                            style={style.canvas}
                            />
                    </BrowserView>

                    <MobileView>
                        <canvas
                            ref="canvas"
                            width={ window.innerWidth/2 }
                            height={ window.innerWidth/2 }
                            onMouseDown={e => this.startDrawing(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
                            onMouseUp={() => this.endDrawing()}
                            onMouseLeave={() => this.endDrawing()}
                            onMouseMove={e => this.draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
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
                <PredictionArea data={this.state.data} isPredicted={this.state.isPredicted}/>
            </div>
        )  
    }
}

export default MNISTPredArea;

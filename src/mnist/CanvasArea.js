import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const colors = {
    background: '#262626',
    h1: '#fff',
    text: '#fff',
    icon: '#fff',
    imgBack: '#fff',
    canvasBack: '#444',
    resetButton: '#ff5050',
    predictButton: '#1a75ff',
}

const style = {
    canvas: {
        border: '1px solid gray',
        backgroundColor: 'white',
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
    }
};


class CanvasArea extends Component {

    constructor() {
        super();
        this.state = { drawing: false };
    }

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


    // getImageData() {
    //     return new Promise(resolve => {
    //       const ctx = this.getContext();
    
    //       const image = new Image();
    //       const width = 28;
    //       const height = 28;
    
    //       image.onload = () => {
    //         ctx.drawImage(image, 0, 0, width, height);
    //         const imageData = ctx.getImageData(0, 0, width, height);
    
    //         for (let i = 0; i < imageData.data.length; i += 4) {
    //           const avg =
    //             (imageData.data[i] +
    //               imageData.data[i + 1] +
    //               imageData.data[i + 2]) /
    //             3;
    //           imageData.data[i] = avg;
    //           imageData.data[i + 1] = avg;
    //           imageData.data[i + 2] = avg;
    //         }
    //         resolve(imageData);
    //       };
    
    //       image.src = this.signaturePad.toDataURL();
    //     });
    //   }
    


    predict() {
        // const ctx = this.getContext();
        // ctx.toData
    }

    render() {
        return (
            <div>
                <div>
                    <BrowserView>
                        <canvas
                                ref="canvas"
                                width="280px"
                                height="280px"
                                onMouseDown={e => this.startDrawing(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
                                onMouseUp={() => this.endDrawing()}
                                onMouseLeave={() => this.endDrawing()}
                                onMouseMove={e => this.draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
                                style={style.canvas}
                            />
                    </BrowserView>

                    <MobileView>]
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
                    <Button
                        style={style.resetButton}
                        onClick={()=> this.resetCanvas()}
                    >
                        delete
                        <DeleteIcon fontSize="midium" style={style.icon}/> 
                    </Button>
                    <Button
                        style={style.predictButton}
                        onClick = {() => this.predict()}
                    >
                        predict
                        <EqualizerIcon fontSize="midium" style={style.icon} />
                    </Button>
                </div>
            </div>
        );
    }
}
export default CanvasArea;
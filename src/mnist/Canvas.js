import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';


const colors = {
    background: '#262626',
    h1: '#fff',
    text: '#fff',
    icon: '#fff',
    imgBack: '#fff',
    canvasBack: '#444',
    resetButton: '#ff5050',
    sendButton: '#1a75ff',
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
    sendButton: {
        background: colors.sendButton,
        color: colors.text,
        margin: '20px',
        padding: '10px',
    },
    icon: {
        color: colors.icon,
        margin: '0px 0px 0px 10px',
    }
};


class Canvas extends Component {
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

    // drawCanvas() {
    //     // drawingがtrueじゃなかったら返す
    //     if (!this.state.drawing){
    //         return
    //     };
    //     const ctx = this.getContext();
    //     let rect = e.target.getBoundingClientRect();
    //     let x = e.clientX - rect.left;
    //     let y = e.clientY - rect.top;
    //     let w = 18;
    //     //document.getElementById('width').value;
    //     let color = '#000000';
    //         //document.getElementById('color').value;
    //     let r   = parseInt(color.substring(1,3), 16);
    //     let g = parseInt(color.substring(3,5), 16);
    //     let b  = parseInt(color.substring(5,7), 16);
    //     // 描画
    //     ctx.lineCap = 'round';
    //     ctx.strokeStyle = '#000000';
    //     ctx.lineWidth = w;
    //     ctx.beginPath();
    //     ctx.moveTo(before_x, before_y);
    //     ctx.lineTo(x, y);
    //     ctx.stroke();
    //     ctx.closePath();
    //     // 描画最後の座標を前回の座標に代入する
    //     before_x = x;
    //     before_y = y;
    // }

    resetCanvas() {
        const ctx = this.getContext();
        ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
    }

    submission() {

    }
  render() {
    return (
        <div>
            <canvas
                ref="canvas"
                width="300px"
                height="300px"
                onMouseDown={e => this.startDrawing(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
                onMouseUp={() => this.endDrawing()}
                onMouseLeave={() => this.endDrawing()}
                onMouseMove={e => this.draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
                style={style.canvas}
            />
        
            <Button
                style={style.resetButton}
                onClick={()=> this.resetCanvas()}
            >
            Delete
            <DeleteIcon fontSize="midium" style={style.icon}/> 
            </Button>
            <Button
                style={style.sendButton}
            >
                Send
                <SendIcon fontSize="midium" style={style.icon} />
            </Button>
        </div>
    );
  }
}
export default Canvas;

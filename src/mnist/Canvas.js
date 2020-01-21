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

    resetCanvas() {
        const ctx = this.getContext();
        ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
        ctx.beginPath();
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

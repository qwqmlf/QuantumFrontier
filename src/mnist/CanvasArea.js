import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';
import Canvas from './Canvas.js';

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

  render() {
    return (
        <div style={{margin:'auto'}}>

            <Canvas draw={}/>

            <div style={style.buttonArea}>
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
        </div>
    );
  }
}
export default CanvasArea;
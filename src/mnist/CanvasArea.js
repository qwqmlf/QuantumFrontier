import React, { Component } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

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

class CanvasArea extends Component {

    constructor(props) {
        super(props);
        this.state = { drawing: false };
    }

    startDrawing(x, y) {
        this.setState({ drawing: true });
        const ctx = this.props.getContext;
        ctx.lineWidth = 15;
        ctx.lineCap = "round";
        ctx.moveTo(x, y);
    }

    draw(x, y) {
        if (!this.state.drawing) {
            return;
        }
        const ctx = this.props.getContext;
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    endDrawing() {
        this.setState({ drawing: false });
    }


    render() {
        return (
            <div>
                <BrowserView>
                    <canvas
                        ref={this.props.canvasProp.ref}
                        width={this.props.canvasProp.width}
                        height={this.props.canvasProp.height}
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
        );
    }
}
export default CanvasArea;
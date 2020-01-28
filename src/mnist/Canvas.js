import React, { Component } from 'react'

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';



const style = {
    canvas: {
        border: '1px solid gray',
        backgroundColor: 'white',
    },
}
export class Canvas extends Component {
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
        // const ctx = this.getContext();
        // ctx.toData
    }

    render() {
        return (
            <div>
                <BrowserView>
                    <canvas
                            ref="canvas"
                            width="300px"
                            height="300px"
                            onMouseDown={e => this.startDrawing(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
                            // onMouseWheel={e => this.startDrawing(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
                            onMouseUp={() => this.endDrawing()}
                            onMouseLeave={() => this.endDrawing()}
                            onMouseMove={e => this.draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
                            style={style.canvas}
                        />
                </BrowserView>
                <MobileView>

                </MobileView>
            </div>
        )
    }
}

export default Canvas

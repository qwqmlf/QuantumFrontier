import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { BrowserView, MobileView } from 'react-device-detect';


const colors = {
    background: '#262626',
    h1: '#fff',
    text: '#fff',
    icon: '#fff',
    resetButton: '#ff5050',
    predictButton: '#1a75ff',
};

const style = {
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


export class ButtonArea extends Component {

    constructor(props){
        super(props);
    }


    resetCanvas() {
        const ctx = this.props.getContext;
        ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
        ctx.beginPath();
    }

    getImageData() {
        return new Promise(resolve => {
          const ctx = this.getContext();
    
          const image = new Image();
          const width = 28;
          const height = 28;
    
          image.onload = () => {
            ctx.drawImage(image, 0, 0, width, height);
            const imageData = ctx.getImageData(0, 0, width, height);
    
            for (let i = 0; i < imageData.data.length; i += 4) {
              const avg =
                (imageData.data[i] +
                  imageData.data[i + 1] +
                  imageData.data[i + 2]) /
                3;
              imageData.data[i] = avg;
              imageData.data[i + 1] = avg;
              imageData.data[i + 2] = avg;
            }
            resolve(imageData);
          };
    
          image.src = this.signaturePad.toDataURL();
        });
      }
    

    render() {
        return (
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
                    >
                        predict
                        <EqualizerIcon fontSize="midium" style={style.icon} />
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
                    >
                        predict
                        <EqualizerIcon fontSize="midium" style={style.icon} />
                    </Button>

                </MobileView>
            </div>
        )
    }
}

export default ButtonArea

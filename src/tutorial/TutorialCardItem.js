import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import junbi from '../img/junbi.png';
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';


const useStyles = makeStyles(theme =>({
  contentStyle: {
    background: '#666',
    color: '#fff',
    padding: '20px',
  },
  overviewStyle: { 
    lineHeight: '46px',
    fontSize: 'large',
    textAlign: 'left',
    borderBottom: 'groove 3px #888',
  },
  titleStyle: {
    fontSize: 'large',
    textAlign: 'left',
  },
  descriptionStyle: {
    padding: '20px',
  },
  buttonStyle: {
    align: 'left',
    marginTop: '20px',
  },
}));

function CompeItems(props) {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.contentStyle}>
        <div className={classes.overviewStyle}>
          Over view
        </div>
        <div>
          <div className={classes.titleStyle}>
            {props.item.title}
          </div>
          <div>
            <p>
              <img src={junbi} alt='compeimg'　align='left' style={{
                height: '360px',
                width: '500px',
                margin: '20px'
                }} />
            </p>
            <div className={classes.descriptionStyle}>
              { props.item.description }  
            </div>
          </div>
          <br clear='left' />
          <div className={classes.buttonStyle}>
            <Button variant="contained" color="default">
              Download
              <CloudDownloadIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default CompeItems;
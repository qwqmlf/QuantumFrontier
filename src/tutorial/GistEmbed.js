import React from 'react'

import { makeStyles }  from '@material-ui/core/styles';

import Gist from 'super-react-gist';
// import Gist from 'react-gist'; 

const useStyles = makeStyles(theme => ({
  root: {
    margin: '20px'
  },
  gistSpace: {
    height: '800px',
  },
}))

export default function IpynbToHtml() {
  const classes = useStyles();

  return (
  <div className={classes.root}>
    <Gist url='https://gist.github.com/rum-yasuhiro/3c85030137d98088b0c507477fe03090' />
  </div>
  )
}
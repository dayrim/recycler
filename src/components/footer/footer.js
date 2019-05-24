import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

  footerBox:{
    marginTop: '70px',
    minHeight: '200px'
  }
}));

function Footer() {

  const classes = useStyles();

  return (
    <div >
      

    <AppBar position="static" className={classes.footerBox}  color="secondary">
      <Typography variant="body1" color="inherit">

      </Typography>
      </AppBar>
    </div>
  );
}

export default Footer;
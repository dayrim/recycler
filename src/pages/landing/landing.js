import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router';

const useStyles = makeStyles(theme => {
    return({
    topimage:{
        width: "100%",
        height: "80vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        backgroundImage: "url(/assets/images/background1_vertical.jpg)",
        opacity: ".8"
        
    },
    underlay:{
        backgroundColor: "black",
    },
    overlay:{
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.secondary.main,
        opacity: ".25"
    }
})});

function Landing() {
    const classes = useStyles()
  return (
    <div className={classes.underlay}>
    <div className={classes.topimage}>
      <div className={classes.overlay}></div>
    </div>
    </div>
  );
}

export default withRouter(Landing)
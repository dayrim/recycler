import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ReactPlayer from 'react-player'

const useStyles = makeStyles(theme => ({
  sectionText:{
    maxWidth: '650px',
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    
    alignItems: 'center',
  },
  section:{
    width: '100%'
  },
  boxRoot:{
    display: 'flex',
    justifyContent: 'center'
  }
}));


function Section2() {

  const classes = useStyles();
  return (
    <div className={classes.section}>
            <Typography variant="h2" align="center" color="inherit">Waste into revenue</Typography>
            <Divider/>
      <Divider/>
    <Divider/>
    <Box classes={{root: classes.boxRoot}} className={classes.sectionText}   >

      <ReactPlayer url="/assets/video.mp4" controls width="80%" height="80%"/>
      <Divider/>
    <Divider/>
    <Divider/>
      <Typography variant="body1" align="center"  color="inherit">
Re-cyclist is a digital facilitated platform where your company can exchange any excess materials and products in order to save money, reduce waste going to landfill and to develop new business opportunities. Potential exchanges are identified through an online exchange or through facilitated technical assistance. 
      </Typography>
      </Box>
      <Divider/>
      {/* <Box classes={{root: classes.boxRoot}}>
      <Button variant="contained" color="primary" size="large">
        Sign up
      </Button>
      </Box> */}
    </div>
  );
}

export default withRouter(Section2)
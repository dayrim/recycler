


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import routes from '../../routes';
const mapStateToProps = state => ({
    sidebarToggled: state.sidebarToggled
  });

const useStyles = makeStyles(theme => ({
    flexContainer:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    logo:{
        width: "150px"
    },
    menuBar:{
        height: "225px",
 
    },
    toolbarItem:{
        margin: "0 15px"

    }
}));

function Topmenu() {
  const classes = useStyles();
  return (
    <div >
      <AppBar position="static" color="secondary" className={classes.menuBar}>
      
      <Container className={classes.flexContainer}>
      <img src="/assets/logo.svg" className={classes.logo}/>
      <Typography variant="h6" align="center" color="inherit">
            Recyclist
        </Typography>
            <Toolbar>
                    {routes.map((route,key)=>(
                        <Typography className={classes.toolbarItem} variant="subtitle2" align="center" color="inherit">
                        {route.name}
                        </Typography>
                    ))}

            </Toolbar>
      </Container>
      </AppBar>
    </div>
  );
}

export default connect(
    mapStateToProps
)(Topmenu);

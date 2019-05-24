import React from 'react';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router';
import routes from '../../routes'
import HashRoutes from './hashroutes';
import ScrollableSection from 'react-update-url-on-scroll';
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';

const mapStateToProps = state => ({
  topmenuToggled: state.layout.topmenuToggled
});


const useStyles = makeStyles(theme => {
    return({
    topimage:{
        width: "100%",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        backgroundImage: "url(/assets/images/background1_vertical.jpg)",
        opacity: ".8"
        
    },
    underlay:{
        backgroundColor: "black",
        position: 'relative',
        top: '0',
        transition: "all 0.5s cubic-bezier(0.8, 0.05, 0.4, 1)",
        marginTop:0,
    },
    fixedmenuspacing:{
        height: '225px',
        backgroundColor: theme.palette.secondary.main,
    },
    content:{
      height: "100%",
      width: "100%",
      position: "absolute",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '1'
    },
    overlayText:{
      color: 'white'
    },
    sectionComponent:{
      minHeight: '65vh',
      flexDirection: 'column',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    overlay:{
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.secondary.main,
        opacity: ".25"
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.75),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 1),
      },
      marginRight: theme.spacing(3),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '450px',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
})});

function Landing(props) {
    const classes = useStyles()
  return (
    <React.Fragment>
      <Box className={classes.content}>

    <Container className={classes.content} >
    <Divider/>
      <Divider/>
      <Divider/>
      <Divider/>
      <Divider/>
      <Divider/>
      <Typography variant="h3" className={classes.overlayText} align="center">
      Recyclist, conscious businesses
      </Typography>
      <Divider/>
      <Typography variant="subtitle1" className={classes.overlayText} align="center">
      Material exchange for businesses, creators and entrepreneurs
      </Typography>
      <Divider/>
      <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search for material …"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
      <Divider/>
      <Button variant="contained" color="primary" size="large">
        Search
      </Button>
    </Container>
    </Box>
      <section>
    <div className={classes.underlay}>

    <div className={classes.topimage}>

      <div className={classes.overlay}></div>
    </div>
  
    </div>

    </section>
       {routes.map((route,outerKey)=>{
         if(route.name==="Landing"){
           return(
           route.hashroutes.map((hashName,innerKey)=>{
              const HashComponent = HashRoutes[hashName]
              return (
                <React.Fragment key={innerKey}>
               <ScrollableSection  id={`${hashName}`} hash={`${hashName}`}>
                 <Container className={classes.sectionComponent}>
              <Divider/>
              <Divider/>
              <Divider/>
              <Divider/>
              <Divider/>
              <HashComponent />
              </Container>
              </ScrollableSection>
              </React.Fragment>)
            })
         )
        }
       })}
       </React.Fragment>
  );
}

export default withRouter(connect(mapStateToProps)(Landing))
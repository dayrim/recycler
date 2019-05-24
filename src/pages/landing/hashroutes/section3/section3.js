import React,{useState} from 'react';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import materialData from '../../../../data/materials.json';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import StepConnector from '@material-ui/core/StepConnector';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  stepperRoot:{
      backgroundColor: 'unset',
  },
  section:{
    width: '100%'
  },
  card:{
    width: '300px'
  },
  media: {
    height: '200px',
  },
  connectorRoot:{
    position: 'relative',
    top: 'unset',
    left: 'unset',
    right: 'unset',
    width: '1px',
    margin: 'auto'
  },
  mobileStepper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
}));

const stepperContent = [
  {
    tabLabel: "For buyers",
    steps: [
      {
      header: "Sign in",
      content: "Create your profile (business, charity or person)"
      },
      {
        header: "Find more offers",
        content: "Find offers near you or search listings based on material, location, or business"
      },
      {
        header: "Negotiate",
        content: "Negotiate with sellers and make deals."
      },
      {
        header: "Organise pick up",
        content: "Recycler facilitates item pick-up and transportation."
      }
    ]
  },
  {
    tabLabel: "For sellers",
    steps: [
      {
      header: "Sign in",
      content: "Create your profile (business, charity or person)"
      },
      {
        header: "List items for free",
        content: "Register the material in our database."
      },
      {
        header: "Receive more offers",
        content: "Connect with buyers and receive more offers on your material"
      },
      {
        header: "Organise pick up",
        content: "Recycler facilitates item pick-up and transportation."
      }
    ]
  }
]
function Section1() {
  let [tabValue, tabChange] = useState(0);
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:740px)');
  console.log(mobile)
  return (
    <div className={classes.section} >
      
      <Typography variant="h2" color="inherit"  align="center" >How to use our platform</Typography>
      <Divider/>
      <Tabs
          indicatorColor="primary"
          textColor="primary"
          centered
          value={tabValue}
          onChange={(event,tabValue)=>tabChange(tabValue)}
        >
            {stepperContent.map((tab,key)=>(<Tab label={tab.tabLabel} key={key}></Tab>))}

        </Tabs>
        <Divider/>
        {tabValue === 1 && 
            
            <Stepper alternativeLabel classes={{ root: classes.stepperRoot}} className={mobile ? classes.mobileStepper : null} connector={<StepConnector classes={{root: classes.connectorRoot}}/>} orientation={mobile ? 'vertical':'horizontal'}>
              {stepperContent[1].steps.map((step,key)=>(<Step key={key}>

                <StepLabel active={true}>
                <Typography variant="h6" color="inherit"  align="center" >{step.header}</Typography>
                <Typography variant="body1" color="inherit"  align="center" >{step.content}</Typography>
                </StepLabel>

              </Step>))}
      </Stepper>
        }
        {tabValue === 0 && 
            <Stepper alternativeLabel classes={{ root: classes.stepperRoot}} className={mobile ? classes.mobileStepper : null} connector={<StepConnector classes={{root: classes.connectorRoot}}/>} orientation={mobile ? 'vertical':'horizontal'}>
            {stepperContent[0].steps.map((step,key)=>(<Step key={key}>

              <StepLabel active={true}>
              <Typography variant="h6" color="inherit"  align="center" >{step.header}</Typography>
              <Typography variant="body1" color="inherit"  align="center" >{step.content}</Typography>
              </StepLabel>

            </Step>))}
      </Stepper>        
        }
     <Divider/>
     <Divider/>
<Typography variant="h2" color="inherit" align="center">Recent materials</Typography>

<Divider/>
<Divider/>
<Divider/>
<Divider/>
<Divider/>
    <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container  justify="center" spacing={3}>
            {materialData.map((material,index) => (
              <Grid key={index} item>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={material.imageUrl}
                        title={material.name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {material.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {material.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>

                  </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

<Divider/>
<Divider/>
<Divider/>
<Divider/>
<Divider/>
    </div>
  );
}

export default withRouter(Section1)
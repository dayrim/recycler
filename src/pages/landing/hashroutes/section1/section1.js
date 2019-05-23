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

const useStyles = makeStyles(theme => ({
  root:{
      backgroundColor: 'unset',
  },
  sector1:{
      
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

  return (
    <div  >
      <Typography variant="h2" color="inherit"  align="center" >How it works</Typography>
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
            
            <Stepper alternativeLabel classes={{ root: classes.root}}>
              {stepperContent[1].steps.map((step,key)=>(<Step key={key}>

                <StepLabel active={true}>
                <Typography variant="h6" color="inherit"  align="center" >{step.header}</Typography>
                <Typography variant="body1" color="inherit"  align="center" >{step.content}</Typography>
                </StepLabel>

              </Step>))}
      </Stepper>
        }
        {tabValue === 0 && 
            <Stepper alternativeLabel classes={{ root: classes.root}}>
            {stepperContent[0].steps.map((step,key)=>(<Step key={key}>

              <StepLabel active={true}>
              <Typography variant="h6" color="inherit"  align="center" >{step.header}</Typography>
              <Typography variant="body1" color="inherit"  align="center" >{step.content}</Typography>
              </StepLabel>

            </Step>))}
      </Stepper>        
        }

    </div>
  );
}

export default withRouter(Section1)
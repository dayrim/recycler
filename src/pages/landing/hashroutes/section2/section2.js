import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import Box from "@material-ui/core/Box";
import StepLabel from "@material-ui/core/StepLabel";
import Divider from "@material-ui/core/Divider";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import { StepConnector } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  stepperRoot: {
    backgroundColor: "unset",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "400px",
    margin: "auto",
    flexDirection: "column",
    ".MuiStepLabel-root": {
      marginTop: "66px",
      marginBottom: "66px"
    }
  },
  section: {
    width: "100%"
  },
  connectorRoot: {
    position: "relative",
    top: "unset",
    left: "unset",
    right: "unset",
    width: "1px",
    margin: "auto"
  },
  sectionText: {
    maxWidth: "650px",
    margin: "auto"
  }
}));

const stepperContent = {
  steps: [
    {
      header: "Resource data collection"
      // content: "Collect and save data about the material, component or product in a structured manner."
    },
    {
      header: "Valuation"
      // content: "We calculate the financial value, and the environmental and societal impact of the matches we identify."
    },
    {
      header: "Resource exchange platform"
      // content: "We facilitate the matchmaking of material streams to find the highest-value reuse of materials and products."
    }
  ]
};
function Section1() {
  let [tabValue, tabChange] = useState(0);
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <Typography variant="h2" color="inherit" align="center">
        Our process
      </Typography>

      <Divider />

      {/* <Typography
        className={classes.sectionText}
        variant="body1"
        color="inherit"
        align="center"
      >
        To make successful matches we use systematic and holistic approuch based
        on business needs. The following tools are instrumental to this process
      </Typography>

      <Divider /> */}

      <Stepper
        orientation="vertical"
        alternativeLabel
        classes={{ root: classes.stepperRoot }}
        connector={<StepConnector classes={{ root: classes.connectorRoot }} />}
      >
        {stepperContent.steps.map((step, key) => (
          <Step key={key}>
            <StepLabel
              active={true}
              style={{ marginTop: "25px", marginBottom: "25px" }}
            >
              <Typography variant="h4" color="inherit" align="center">
                {step.header}
              </Typography>

              <Typography variant="body1" color="inherit" align="center">
                {step.content}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default withRouter(Section1);

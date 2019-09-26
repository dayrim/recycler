import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Divider from "@material-ui/core/Divider";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import materialData from "../../../../data/materials.json";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import StepConnector from "@material-ui/core/StepConnector";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
  stepperRoot: {
    backgroundColor: "unset"
  },
  section: {
    width: "100%"
  },
  card: {
    width: "300px"
  },
  media: {
    height: "200px"
  },
  connectorRoot: {
    position: "relative",
    top: "unset",
    left: "unset",
    right: "unset",
    width: "1px",
    margin: "auto"
  },
  mobileStepper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
}));

const stepperContent = [
  {
    tabLabel: "For sellers",
    steps: [
      // {
      // header: "Sign in",
      // content: "Create your profile (business, charity or person)"
      // },
      {
        header: "List items",
        content: "Send material data."
      },
      {
        header: "Receive offers",
        content: "Connect with potential buyers."
      },
      {
        header: "Transportation",
        content: "Schedule pick-up."
      }
    ]
  },
  {
    tabLabel: "For buyers",
    steps: [
      // {
      // header: "Sign in",
      // content: "Create your profile (business, charity or person)"
      // },
      {
        header: "Find offers",
        content: "Browse material database"
      },
      {
        header: "Negotiate",
        content: "Contact the seller."
      },
      {
        header: "Transportation",
        content: "Plan transportation"
      }
    ]
  }
];
function Section1() {
  let [tabValue, tabChange] = useState(0);
  const classes = useStyles();
  const mobile = useMediaQuery("(max-width:740px)");
  console.log(mobile);
  return (
    <div className={classes.section}>
      <Typography variant="h2" color="inherit" align="center">
        Business model
      </Typography>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={process.env.PUBLIC_URL + "/assets/model.png"}
          style={{ width: "70%" }}
        ></img>
      </div>
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Divider />
    </div>
  );
}

export default withRouter(Section1);

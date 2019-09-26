import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Divider } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    width: "100%"
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  menu: {
    width: 200
  }
}));
const MaterialPage = () => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper}></Paper>
      <Divider />
      <Divider />
      <Divider />
    </>
  );
};

export default MaterialPage;

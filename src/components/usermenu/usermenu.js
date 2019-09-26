import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    padding: theme.spacing(2)
  }
}));

const UserMenu = ({ className = {} }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return <div className={clsx(classes.root, className)}>User Name</div>;
};

export default UserMenu;

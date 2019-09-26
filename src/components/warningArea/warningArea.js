import React from "react";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import { amber, green } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import WarningIcon from "@material-ui/icons/Warning";
import { getLatestPopup } from "reducers/UI";
import { makeStyles } from "@material-ui/core/styles";

import { removePopup } from "actions/UI";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.main
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function WarningArea() {
  const infoPopup = useSelector(getLatestPopup);
  const classes = useStyles();
  const dispatch = useDispatch();
  const Icon = infoPopup ? variantIcon[infoPopup.type] : undefined;

  const handleClose = () => {
    dispatch(removePopup({ id: infoPopup.id }));
  };

  return (
    <div>
      {infoPopup ? (
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          open={true}
          autoHideDuration={infoPopup.duration - 500}
        >
          <SnackbarContent
            className={clsx(classes[infoPopup.type], classes.margin)}
            aria-describedby="client-snackbar"
            message={
              <span id="client-snackbar" className={classes.message}>
                <Icon className={clsx(classes.icon, classes.iconVariant)} />
                {infoPopup.message}
              </span>
            }
            action={[
              <IconButton
                key="close"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon className={classes.icon} />
              </IconButton>
            ]}
          />
        </Snackbar>
      ) : (
        undefined
      )}
    </div>
  );
}
